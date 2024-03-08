import Link from "next/link"
import LayoutContainer from "../Container";
import FooterList from "./FooterList";

import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-gray-200 text-sm mt-16">
      <LayoutContainer>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h2 className="text-base font-semibold mb-2">Organisasi</h2>
            <Link href="#" className="hover:underline">Beranda</Link>
            <Link href="#" className="hover:underline">Tentang Kami</Link>
            <Link href="#" className="hover:underline">Galeri</Link>
            <Link href="#" className="hover:underline">Artikel</Link>
          </FooterList>
          <FooterList>
            <h2 className="text-base font-semibold mb-2">Pelayanan</h2>
            <Link href="#" className="hover:underline">Kontak Kami</Link>
            <Link href="#" className="hover:underline">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-base font-semibold mb-2">About Us</h2>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              necessitatibus delectus aliquam incidunt quam doloribus, dolore
              tempora explicabo, quas rerum, eveniet at nostrum quos error illo
              optio perspiciatis enim cum?
            </p>
            <p>
              &copy; {new Date().getFullYear()} Comunity of Information Technology. All rights
              reversed.
            </p>
          </div>
          <FooterList>
            <h2 className="text-base font-semibold mb-2">Ikuti Kami</h2>
            <div className="flex gap-2">
              <Link href="#">
                <FaGithub size={24} />
              </Link>
              <Link href="#">
                <FaInstagram size={24} />
              </Link>
              <Link href="#">
                <FaTiktok size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </LayoutContainer>
    </footer>
  );
};

export default Footer;
