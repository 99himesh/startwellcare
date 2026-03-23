import { Image } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Home1 from "../../../assets/home/home1.jpg";
import Home2 from "../../../assets/home/home4.jpg";
import Home3 from "../../../assets/home/home5.jpg";

const HomeSlider = () => {
  const images = [Home1, Home2, Home3];

  return (
    <div className="md:pt-[170px] pt-[150px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
        1024: {
          navigation: true, // Laptop and above
        },
        0: {
          navigation: false, // Mobile & tablet
        },
      }}// arrows
        pagination={{ clickable: true }} // dots
        className="w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="">
              <img
                preview={false}
                src={img}
                className="!w-full md:!h-[800px] !h-[600px]  object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;