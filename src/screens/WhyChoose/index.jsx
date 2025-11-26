import React, { useEffect, useRef } from "react";


const WhyChoose = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-delay");
            entry.target.style.transitionDelay = delay + "ms";
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
  }, []);

  const data = [
    { title: "Families Supported", value: "50K+" },
    { title: "Care Availability", value: "24/7" },
    { title: "Client Satisfaction", value: "98%" },
    { title: "Award Winning", value: "40+" },
  ];

  return (
    <section className="mt-20 px-5">
      <div className="max-w-screen-xl m-auto">
        <div className="bg-[#f6f4f0] p-10 rounded-[20px]">
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-15 text-center">

            {data.map((item, i) => (
              <div
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className="fade-up"
                data-delay={i * 150}  // <-- delay: 0ms, 150ms, 300ms, 450ms
              >
                <h3 className="text-[20px]">
                  {item.title.split(" ")[0]}{" "}
                  <span className="text-[#61ad41] font-bold">
                    {item.title.split(" ")[1]}
                  </span>
                </h3>
                <h2 className="text-[58px] font-medium">{item.value}</h2>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
