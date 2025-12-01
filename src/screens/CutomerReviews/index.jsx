import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import stars from "../../assets/images/stars.svg";
import profileadmin from "../../assets/images/profileadmin.jpg";

const CustomerReviews = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const reviews = [1, 2, 3, 4, 5];

  return (
    <section ref={sectionRef} className="px-5 py-8 pt-10">
      <div className="max-w-7xl m-auto">

        <h2 className="text-[52px] text-center font-bold mb-16">
          Our Customer{" "}
          <span className="elegance text-[52px] text-[#60AD44] font-medium">
            Reviews
          </span>
        </h2>

        {/* ⭐ Swiper Slider */}
       <Swiper
  slidesPerView={1}
  spaceBetween={20}
  navigation
  pagination={{ clickable: true }}

  /* ⭐ SMOOTH + SLOW + NO JUMP */
  loop={true}
  speed={900}
  autoplay={{
    delay: 2800,
    disableOnInteraction: false,
  }}

  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}

  modules={[Navigation, Pagination, Autoplay]}
  className="pb-10"
>

          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="border border-[#c5c2bc] p-5 rounded-[12px] hover:bg-[#f4f1e9] duration-300">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={stars}
                        alt=""
                        className="yellow-star"
                      />
                    ))}
                  </div>

                  <p className="text-[#707070] text-[18px] mt-2">
                    Teamollo of work, our brand now has the image we were
                    looking for - playful yet professional. We have received
                    Learn More...
                  </p>

                  <div className="flex items-center gap-3 mt-6">
                    <img
                      src={profileadmin}
                      alt=""
                      className="h-18 w-18 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="text-[20px] font-medium">Ashley Cooper</h3>
                      <p className="text-[12px] text-[#8b8b8b]">
                        Business Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <button className="bg-[#63ad44] text-white px-10 py-3 text-[18px] rounded-[8px] mt-10 hover:bg-[#011e10] duration-300 m-auto block">
          See All Reviews
        </button> */}
      </div>
    </section>
  );
};

export default CustomerReviews;
