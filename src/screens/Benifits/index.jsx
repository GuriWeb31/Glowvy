import React, { useEffect, useRef, useState } from 'react';
import bottleone from '../../assets/images/bottleone.png';
import bottletwo from '../../assets/images/bottletwo.png';

const Benifits = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // List of items to render
  const items = [
    { img: bottleone, text: 'Rich in vitamins A, C, E, and minerals like calcium and iron' },
    { img: bottletwo, text: 'Rich in vitamins A, C, E, and minerals like calcium and iron' },
    { img: bottletwo, text: 'Rich in vitamins A, C, E, and minerals like calcium and iron' },
    { img: bottleone, text: 'Rich in vitamins A, C, E, and minerals like calcium and iron' },
  ];

  return (
    <section ref={sectionRef} className="px-5 pt-30 pb-20">
      <div className="max-w-screen-xl m-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-10">
          
          {/* First Column */}
          <div>
            {items.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 items-center mb-10 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }} // staggered delay
              >
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="protransform w-[200px] border border-[#b9b9b9] p-3 rounded-[8px]"
                  />
                </div>
                <div>
                  <p className="text-[#707070] text-[20px] mt-3 mr-4">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div>
            {items.slice(2).map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 items-center mb-10 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }} // staggered delay
              >
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="protransform w-[200px] border border-[#b9b9b9] p-3 rounded-[8px]"
                  />
                </div>
                <div>
                  <p className="text-[#707070] text-[20px] mt-3 mr-4">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Third Column */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h1 className="text-[52px] leading-16 font-bold">
              The Benefit of <br />
              This <span className="elegance text-[52px] text-[#60AD44] font-medium">Product</span>
            </h1>
            <p className="text-[#222222] text-[20px] mt-3 mr-4">
              This powders are typically used as supplements in, smoothies, teas, or as ingredients in natural remedies
            </p>
            <button className="bg-[#63ad44] text-white px-10 py-3 text-[18px] rounded-[8px] mt-8 hover:bg-[#011e10] duration-300">
              Explore Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benifits;
