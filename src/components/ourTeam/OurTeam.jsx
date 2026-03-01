import { Col, Image, Row } from "antd";
import CustomText from "../common/CustomText";
import vikram from "../../assets/ourTeam/vikram.jpeg"
import zaid from "../../assets/ourTeam/zaid.jpeg"
import rafi from "../../assets/ourTeam/rafi.jpeg"
import rias from "../../assets/ourTeam/rias.jpeg"
const OurTeam=()=>{
    return(
        <div className="md:w-[1440px] mx-auto px-5 ">
            <div className="flex justify-center pb-5x`">
                <CustomText className={"md:!text-[40px] !text-[24px] font-semibold !text-[#3b91c5]"} value={"Meet Our Star Wellcare Team"}/>
            </div>
            <div className="flex flex-col gap-3">
         <Row justify={"center"} gutter={[40,40]}>
            <Col xxl={12} xl={12} md={12} sm={24} xs={24}>
            <div className="flex justify-center">
                <div className="flex flex-col items-center gap-3">
                <div className="md:!h-[500px] md:!w-[500px]">
                <Image className="h-full w-full rounded-full" preview={false} src={zaid}/>
                </div>
                <CustomText className={"!text-[30px] font-semibold"} value={"Zaid Ahmad"}/>
                </div>
            </div>
            </Col>
             <Col  xxl={12} xl={12} md={12} sm={24} xs={24}>
              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-3">
                <div className="md:!h-[500px] md:!w-[500px]">
                <Image className="!h-full !w-full rounded-full" preview={false} src={vikram}/>
                </div>
                <CustomText className={"!text-[30px] font-semibold"} value={"Vikram Singh"}/>
            </div>
            </div>
            </Col>
            
         </Row>
          <Row justify={"center"} className="pt-5">
            <Col  xxl={12} xl={12} md={12} sm={24} xs={24}>
            <div className="flex justify-center">
                <div className="flex flex-col items-center gap-3">
                <div className="md:!h-[500px] md:!w-[500px]">
                <Image className="!h-full !w-full rounded-full" preview={false} src={rafi}/>
                </div>
                <CustomText className={"!text-[30px] font-semibold"} value={"Rafi ahmad"}/>
                </div>
            </div>
            </Col>
             <Col  xxl={12} xl={12} md={12} sm={24} xs={24}>
              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-3">
                <div className="md:!h-[500px] md:!w-[500px]">
                <Image className="!h-full !w-full rounded-full" preview={false} src={rias}/>
                </div>
                <CustomText className={"!text-[30px] font-semibold"} value={"Rais ahmad"}/>
            </div>
            </div>
            </Col>
            
         </Row>
        </div>
        </div>
    )
}
export default OurTeam;