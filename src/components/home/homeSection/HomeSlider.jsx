import { Image } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Home1 from "../../../assets/home/home2.jpg";
import Home2 from "../../../assets/home/home4.jpg";
import Home3 from "../../../assets/home/home5.jpg";
import Home9 from "../../../assets/home/home9.png";
const HomeSlider=()=>{
  const images = [Home9,Home1, Home2, Home3];

    return(
        <>
         <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000, // ⏱️ 3 seconds
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={10}
        slidesPerView={1}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="h-[900px] w-full flex items-center justify-center">
              <Image
                preview={false}
                src={img}
                className="!w-full !h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </>
    )
}
export default HomeSlider;