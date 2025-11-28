import React, { useEffect, useRef, useState } from 'react'
import videoone from '../../assets/images/videoone.png'
import videotwo from '../../assets/images/videotwo.png'
import videothree from '../../assets/images/videothree.png'
import videofour from '../../assets/images/videofour.png'

const Videos = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // 👇 Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const images = [videoone, videotwo, videothree, videofour];

  return (
    <section ref={sectionRef} className="px-5 py-8">
      <div className="max-w-7xl m-auto">

        <h2 className="text-[52px] text-center font-bold mb-16">
          Videos for this{" "}
          <span className="elegance text-[52px] text-[#60AD44] font-medium">
            Product
          </span>
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className={`transition-all duration-700 rounded-[12px]
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{
                transitionDelay: `${index * 200}ms`, // 👈 stagger delay
              }}
            >
              <img src={img} alt="" className="rounded-[12px]" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Videos;
