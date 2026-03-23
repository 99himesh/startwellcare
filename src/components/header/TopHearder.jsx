import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router";

const TopHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#3b91c5]   text-white text-sm">
      <div className="container mx-auto flex flex-wrap gap-2 justify-between items-center px-6 py-2">
        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <Link
            target={"_blank"}
            to={"https://www.facebook.com/share/1AhX9jV5x2/?mibextid=wwXIfr"}
          >
            <FaFacebookF className="cursor-pointer hover:opacity-80" />
          </Link>
          <Link
            target={"_blank"}
            to={
              "https://www.instagram.com/starwellcare?igsh=MWExbmV0aG9wdXc2cw%3D%3D&utm_source=qr"
            }
          >
            <FaInstagram className="cursor-pointer hover:opacity-80" />
          </Link>
          <Link target={"_blank"} to={"https://wa.me/+918400897257"}>
            <FaWhatsapp className="cursor-pointer hover:opacity-80" />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <MdEmail />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=starwellcarefoundation@gmail.com"
            class="!text-[#fff] hover:text-[#fff]"
            target="_blank"
            rel="noopener noreferrer"
          >
            starwellcarefoundation@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
