import { Col, Image, Row } from "antd";
import logo from "../../assets/header/logo.jpeg"
import CustomText from "../common/CustomText";
import {FacebookOutlined, InstagramOutlined} from  '@ant-design/icons';
const Footer=()=>{
    return(
        <div className="bg-[#3e6d67] p-2 mt-5">
            <div className="md:w-[1440px] mx-auto  h-[50px] ">
        <Row justify={"center"}>
            <Col span={6}>
            <div className="flex items-center pt-1">            
                  <Image className="!size-[40px]" preview={false} src={logo}/>
            </div>

            </Col>
            <Col span={12}>
                <div className="flex justify-between items-center pt-3">
                    <div>
                    <CustomText className={"!text-[#fff] !text-[14px]"} value={"Gmail :- "}/>
                    <CustomText className={"!text-[#fff] font-semibold !text-[16px]"} value={"starwellcarefoundation@gmail.com"}/>
                    </div>
                    <div>
                        <CustomText className={"!text-[#fff] !text-[14px]"}  value={"Contact :- "}/>
                        <CustomText className={"!text-[#fff] font-bold !text-[16px]"} value={"8400897257"}/>
                    </div>
                </div>
            </Col>
           
            <Col span={6}>
                <div className="flex gap-2 justify-center  items-center pt-3">
                  <InstagramOutlined style={{color:"#fff",fontSize:"20px"}}/>
                  <FacebookOutlined style={{color:"#fff",fontSize:"20px"}}/>
                  {/* <InstagramOutlined style={{color:"#fff",fontSize:"20px"}}/>
                  <InstagramOutlined style={{color:"#fff",fontSize:"20px"}}/> */}
                </div>
            </Col>
        </Row>
        </div>
        </div>
    )
}
export default Footer;