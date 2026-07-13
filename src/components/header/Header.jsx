import { Image } from "antd";
import { useState } from "react";
import logoImage from "../../assets/header/logo.jpeg"
import CustomButton from "../common/CustomButton";
import {Link} from "react-router-dom";
import {CloseOutlined, MenuOutlined} from '@ant-design/icons';
import TopHeader from "./TopHearder";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
 <div className="fixed w-full z-50  " >
  <TopHeader/>
    <nav className="bg-white">
      <div className="container mx-auto ">
        <div className="flex justify-between py-2 items-center px-2">

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
            <CustomButton className={"!rounded-full md:w-[200px] w-[150px] !h-[50px] !text-[16px]"} value={"Donate"}/>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <CloseOutlined style={{fontSize:"24px"}} /> : <MenuOutlined style={{fontSize:"24px"}} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col p-2 flex flex-col gap-3">
           <Link onClick={()=>{setIsOpen(false)}} to={"/"} className="text-[#3b91c5]">Home</Link>
            <Link onClick={()=>{setIsOpen(false)}} to="/about" className="text-[#3b91c5]">About</Link>
            <Link onClick={()=>{setIsOpen(false)}} to={"/our-team"} className="text-[#3b91c5]">Meet Our Team</Link>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Header;
