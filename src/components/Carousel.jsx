import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import sedanCarImg from "/campbelltown-easy-sedan.png";
import luxuryVehicleImg from "/campbelltown-luxury-vehicle.png";
import suvWagonImg from "/campbelltown-suv-wagon.png";
import carnivalImg from "/campbelltown-kia-carnival.png";
import maxiTaxiImg from "/campbelltown-maxi-taxi.png";

const Carousel = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {slidesPerView: 1},
          768: {slidesPerView: 2},
          1024: {slidesPerView: 3},
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className="cursor-pointer">
          <img
            src={sedanCarImg}
            className="max-w-110 md:max-w-80 lg:max-w-80 xl:max-w-100 object-cover  mx-auto"
            alt="Easy Sedan Car Campbelltown Taxi Cabs"
          />
          <p className="mt-0 text-xl">Easy Sedan</p>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <img
            src={luxuryVehicleImg}
            className="max-w-110 md:max-w-80 lg:max-w-80 xl:max-w-100 object-cover mx-auto "
            alt="Luxury Taxi Vehicle Campbelltown Taxi Cabs"
          />
          <p className="mt-0 text-xl">Luxury Vehicle</p>
        </SwiperSlide>

        <SwiperSlide className="cursor-pointer">
          <img
            src={suvWagonImg}
            className="max-w-110 md:max-w-80 lg:max-w-80 xl:max-w-100 object-cover mx-auto "
            alt="Suv or Wagon Car Campbelltown Taxi Cabs"
          />
          <p className="mt-0 text-xl">Suv or Wagon</p>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <img
            src={carnivalImg}
            className="max-w-110 md:max-w-80 lg:max-w-80 xl:max-w-100 object-cover mx-auto h-full "
            alt="Kia Carnival Car Campbelltown Taxi Cabs"
          />
          <p className="mt-0 text-xl">Kia Carnival</p>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <img
            src={maxiTaxiImg}
            className="max-w-110 md:max-w-80 lg:max-w-80 xl:max-w-100 object-cover mx-auto h-full "
            alt="Kia Carnival Car Campbelltown Taxi Cabs"
          />
          <p className="mt-0 text-xl">Maxi Taxi</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
