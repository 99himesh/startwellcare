import { Col, Image, Row } from "antd";
import about from "../../assets/aboutus/about.jpeg"
import CustomText from "../common/CustomText";
const AboutUs=()=>{
    return(
        <div className="w-[1440px] mx-auto">
        <Row>
            <Col span={24}>
             <div className="">
                <Image className="!h-full w-full" src={about}/>

             </div>
             <div className="flex flex-col gap-2">
             <div className="flex justify-center ">
                <CustomText className={"!text-[#3b91c5] font-bold !text-[40px]"} value={"About Us"}/>
             </div>
                <CustomText className={" !text-[16px]"} value={
                    "Star Welcare Foundation is a dedicated multi-purpose social organization committed to uplifting underprivileged and vulnerable communities by providing comprehensive support in healthcare, education, and essential humanitarian services. We actively organize blood donation drives to ensure timely availability of life-saving blood for hospitals and emergency cases, and we extend continuous support to cancer patients by assisting with treatment costs, medicines, emotional care, and necessary medical resources. Our foundation also helps economically disadvantaged patients with hospital bills, diagnostic tests, and critical care assistance, while promoting preventive healthcare through awareness campaigns on hygiene, nutrition, and early disease detection. Beyond medical support, we distribute food, clothing, and daily essentials to homeless and low-income families, provide educational materials and guidance to children in need, and offer emergency relief during crises and disasters. Guided by compassion, integrity, and a deep sense of social responsibility, our vision is to build a caring and inclusive society where every individual—regardless of background or financial condition—has access to quality healthcare, proper education, and the basic necessities required to live with dignity and hope."}/>

             <CustomText className={" !text-[16px]"} value={"At Star Welcare Foundation, our food donation initiatives are dedicated to eliminating hunger by distributing freshly prepared meals, dry ration kits, and essential groceries to underprivileged families, homeless individuals, and roadside communities, ensuring that no one sleeps hungry. Through our clothing donation programs, we collect and provide clean, wearable clothes, winter garments, blankets, and basic necessities to those in need, helping them live with comfort, protection, and dignity. In the education sector, we support schools and underprivileged students by providing books, stationery, uniforms, school bags, and learning resources, along with organizing awareness and motivation programs to encourage children to continue their education and build a brighter future."}/>
           </div>
            <div className="flex flex-col gap-2">
             <div className="flex justify-center ">
                <CustomText className={"!text-[#3b91c5] font-bold !text-[40px]"} value={"Our Vision"}/>
             </div>
                <CustomText className={" !text-[16px]"} value={
                    "Our vision at Star Welcare Foundation is to build a compassionate, inclusive, and empowered society where every individual has access to basic necessities such as food, clothing, education, and healthcare without discrimination. We strive to create a future where no child is deprived of learning opportunities, no family suffers from hunger, and no person is left without support in times of need. Through collective effort, community participation, and a strong commitment to humanity, we aim to spread hope, dignity, and sustainable development for a better and brighter tomorrow.."}/>

           </div>
            </Col>
        </Row>
        </div>
    )
}
export default AboutUs;