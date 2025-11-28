import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import topproone from "../../assets/images/topproone.png";
import topprotwo from "../../assets/images/topprotwo.png";
import topprothree from "../../assets/images/topprothree.png";
import topprofour from "../../assets/images/topprofour.png";
import cart from "../../assets/images/cart.svg";

const data = [
  { img: topproone, title: "Mycorrhizal Fungi with Beneficial Bacteria" },
  { img: topprotwo, title: "Mycorrhizal Fungi with Beneficial Bacteria" },
  { img: topprothree, title: "Mycorrhizal Fungi with Beneficial Bacteria" },
  { img: topprofour, title: "Mycorrhizal Fungi with Beneficial Bacteria" },
  { img: topproone, title: "Mycorrhizal Fungi with Beneficial Bacteria" },
];

const TopSelling = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // 👇 Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="px-5 py-8">
      <div
        className={`max-w-7xl m-auto transition-all duration-[1200ms] 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-[52px] text-center font-bold">
          Top{" "}
          <span className="elegance text-[52px] text-[#60AD44] font-medium">
            Selling
          </span>
        </h2>

        <p className="text-[#222222] text-[20px] mt-3 mr-4 mb-16 text-center">
          This also improves soil structure and root growth (overall healthier
          plants.)
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2200 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`border border-[#c5c2bc] p-5 rounded-[12px] transition-all duration-700 
                ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              >
                <img src={item.img} alt="" />
                <h4 className="text-[24px] font-medium mb-4">{item.title}</h4>

                <div className="flex justify-between items-center">
                  <p className="text-[22px] font-medium">
                    <span className="text-[#8a8884] text-[16px]">$</span>14.95
                  </p>

                  <div className="bg-[#011e10] px-5 py-[6px] rounded-[10px] hover:bg-[#28AF58]">
                    <img src={cart} alt="" className="filter invert w-6" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopSelling;
