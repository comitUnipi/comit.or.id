import bcrypt from "bcrypt";
import prisma from "@/lib/prisma"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nama_lengkap, npm, password, divisi } = req.body;
    if (!npm || !password) {
      return res
        .status(400)
        .json({ error: "npm, password, and email are required." });
    }

    const existingUser = await prisma.user.findUnique({
      where: { npm },
    });

    if (existingUser) {
      return res
      .status(400)
      .json({ error: "npm already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        nama_lengkap,
        npm,
        password: hashedPassword,
        divisi: {
          create: divisi,
        },
      },
      include: {
        divisi: true,
      },
    });

    return res
      .status(201)
      .json({ message: "User created successfully.", data: newUser });
  } else {
    return res
    .status(405)
    .json({ error: "Method Not Allowed" });
  }
}
