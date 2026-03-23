import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 - About */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg text-[#3b91c5]">
            Starwell Care Foundation
          </h3>
          <p className="text-sm text-gray-600">
            Starwell Care Foundation works towards social welfare, helping
            communities through education, health support, and social
            development initiatives.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <div className="flex flex-col gap-3">
            <Link to={"/"} className="cursor-pointer hover:text-[#3b91c5]">
              Home
            </Link>
            <Link to={"/about"} className="cursor-pointer hover:text-[#3b91c5]">
              About Us
            </Link>
            <Link
              to={"/our-team"}
              className="cursor-pointer hover:text-[#3b91c5]"
            >
              Our Work
            </Link>
          </div>
        </div>

        {/* Column 3 - Programs */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Our Programs</h3>
          <p>Education Support</p>
          <p>Healthcare Initiatives</p>
          <p>Food Donation</p>
          <p>Cloth Donation</p>
        </div>

        {/* Column 4 - Contact */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Contact Us</h3>

          <div className="flex items-center gap-2">
            <MdEmail />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=starwellcarefoundation@gmail.com"
              class="!text-[#000] hover:text-[#fff]"
              target="_blank"
              rel="noopener noreferrer"
            >
              starwellcarefoundation@gmail.com
            </a>
          </div>

          <p className="text-sm">📞 90268 30902</p>

          <p className="text-xs text-gray-500 pt-2">
            © 2026 Starwell Care Foundation .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
