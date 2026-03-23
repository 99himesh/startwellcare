import { Card, Col, Image, Row } from "antd";
import CustomText from "../../common/CustomText";
import ourwork1 from "../../../assets/ourWork/ourWork1.jpeg";
import Home8 from "../../../assets/home/home8.jpeg";
import Blood from "../../../assets/ourwork/blood1.jpeg";
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
    <div className="container mx-auto max-sm:px-4 py-10 ">
      <div className="flex justify-center">
        <CustomText
          className={"!text-[40px] !font-bold !text-[#3b91c5]"}
          value={"What We Work On"}
        />
      </div>

      <Row gutter={[20, 20]}  className="py-5 " >
        {ourWork.map((item) => {
          return (
            <Col xxl={8} xl={8} lg={12} md={24} sm={24} xs={24} >
              <Card hoverable cover={
                <>
                <img className="md:h-[500px] h-[300px] !w-full object-cover" preview={false} alt="example" src={item?.image} />
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
