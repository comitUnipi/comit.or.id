import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { npm, password } = req.body;
        if (!npm || !password) {
            return res.status(400).json({ error: 'npm and password are required.' });
        }

        const user = await prisma.user.findUnique({
            where: { npm },
        });

        if (!user) {
            return res.status(401).json({ error: 'Invalid npm or password.' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid npm or password.' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.NEXT_PUBLIC_JWT_SECRET || "", {
            expiresIn: '12h',
        });

        return res.status(200).json({ token });
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}