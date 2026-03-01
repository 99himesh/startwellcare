import { Image } from "antd";
import { useState } from "react";
import logoImage from "../../assets/header/logo.jpeg"
import CustomButton from "../common/CustomButton";
import {Link} from "react-router-dom"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  fixed w-full z-50">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex justify-between py-2 items-center">

          {/* Logo */}
          <div className="size-[120px]">
            <Image preview={false} src={logoImage}/>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <Link to={"/"} className="text-[#3b91c5]">Home</Link>
            <Link to="/about" className="text-[#3b91c5]">About</Link>
            <Link to={"/our-team"} className="text-[#3b91c5]">Meet Our Team</Link>
          </div>
          <div>
            <CustomButton className={"!rounded-full w-[200px] !h-[50px] !text-[16px]"} value={"Donate"}/>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">About</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Testimonial</a>
        </div>
      )}
    </nav>
  );
};

export default Header;
