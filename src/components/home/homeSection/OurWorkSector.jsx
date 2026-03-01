import { Card, Col, Image, Row } from "antd";
import CustomText from "../../common/CustomText";
import ourwork1 from "../../../assets/ourWork/ourWork1.png";
import Home8 from "../../../assets/home/home8.jpeg";
import Blood from "../../../assets/ourwork/blood.jpeg";
const OurWorkSector = () => {
  const ourWork = [
    {
      title: "Food Donation",
      image: ourwork1,
    },
    {
      title: "Medical",
      image: Blood,
    },
    {
      title: "Cloth Donation",
      image: Home8,
    },
  ];
  return (
    <div className="w-[1440px] mx-auto  py-10 ">
      <div className="flex justify-center">
        <CustomText
          className={"!text-[40px] !font-bold !text-[#3b91c5]"}
          value={"What We Work On"}
        />
      </div>

      <Row gutter={[20, 20]} className="py-5">
        {ourWork.map((item) => {
          return (
            <Col span={8}>
              <Card hoverable cover={
                <>
                <Image className=" !h-[600px] !w-full object-fit" preview={false} alt="example" src={item?.image} />
                <CustomText className={"!text-[18px] font-bold !text-center items-center pt-4"} value={item?.title}/>
                </>
              }>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default OurWorkSector;
