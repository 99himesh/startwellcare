import { Col, Image, Row } from "antd";
import about from "../../assets/aboutus/about.jpeg"
import CustomText from "../common/CustomText";
const AboutUs=()=>{
    return(
        <div >
        <Row>
            <Col span={24}>
             <div className="flex  bg-[#3b91c5] py-5">
                <div className="ccontainer mx-auto">
                <CustomText className={"!text-[#fff]  font-bold !text-[40px]"} value={"About Us"}/>
                </div>
             </div >
             <div className="container mx-auto sm:py-5 ">
               <Row>
                  <Col xxl={12} xl={12} md={12} sm={24} xs={24} >
                    <div className=" flex ">
                        <Image preview={false} classNames={"size-[300px] !rounded-full object-cover "}  src={about}/>
                    </div>
                    </Col> 
                    <Col xxl={12} xl={12} md={12} sm={24} xs={24} >
               <div className=" flex flex-col gap-2 md:mx-4 mx-3 ">
                <CustomText className={"!text-[16px] text-justify"} value={
                    "Star wellcare Foundation is a dedicated multi-purpose social organization committed to uplifting underprivileged and vulnerable communities by providing comprehensive support in healthcare, education, and essential humanitarian services. We actively organize blood donation drives to ensure timely availability of life-saving blood for hospitals and emergency cases, and we extend continuous support to cancer patients by assisting with treatment costs, medicines, emotional care, and necessary medical resources. Our foundation also helps economically disadvantaged patients with hospital bills, diagnostic tests, and critical care assistance, while promoting preventive healthcare through awareness campaigns on hygiene, nutrition, and early disease detection. Beyond medical support, we distribute food, clothing, and daily essentials to homeless and low-income families, provide educational materials and guidance to children in need, and offer emergency relief during crises and disasters. Guided by compassion, integrity, and a deep sense of social responsibility, our vision is to build a caring and inclusive society where every individual—regardless of background or financial condition—has access to quality healthcare, proper education, and the basic necessities required to live with dignity and hope."}/>
              <CustomText className={"sm:hidden !text-[16px] text-justify"} value={
                    "Star wellcare Foundation is a dedicated multi-purpose social organization committed to uplifting underprivileged and vulnerable communities by providing comprehensive support in healthcare, education, and essential humanitarian services. We actively organize blood donation drives to ensure timely availability of life-saving blood for hospitals and emergency cases, and we extend continuous support to cancer patients by assisting with treatment costs, medicines, emotional care, and necessary medical resources. Our foundation also helps economically disadvantaged patients with hospital bills, diagnostic tests, and critical care assistance, while promoting preventive healthcare through awareness campaigns on hygiene, nutrition, and early disease detection. Beyond medical support, we distribute food, clothing, and daily essentials to homeless and low-income families, provide educational materials and guidance to children in need, and offer emergency relief during crises and disasters. Guided by compassion, integrity, and a deep sense of social responsibility, our vision is to build a caring and inclusive society where every individual—regardless of background or financial condition—has access to quality healthcare, proper education, and the basic necessities required to live with dignity and hope."}/>
               </div>
                
           </Col>
                <CustomText className={"hidden sm:block !text-[16px] text-justify"} value={"At Star wellcare Foundation, our food donation initiatives are dedicated to eliminating hunger by distributing freshly prepared meals, dry ration kits, and essential groceries to underprivileged families, homeless individuals, and roadside communities, ensuring that no one sleeps hungry. Through our clothing donation programs, we collect and provide clean, wearable clothes, winter garments, blankets, and basic necessities to those in need, helping them live with comfort, protection, and dignity. In the education sector, we support schools and underprivileged students by providing books, stationery, uniforms, school bags, and learning resources, along with organizing awareness and motivation programs to encourage children to continue their education and build a brighter future."}/>
           </Row>
           </div>
            
            </Col>
        </Row>
        </div>
    )
}
export default AboutUs;