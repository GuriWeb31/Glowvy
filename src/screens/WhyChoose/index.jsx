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

  // Split number + suffix
  const splitValue = (value) => {
    const num = parseInt(value);
    const suffix = value.replace(num, "");
    return { num, suffix };
  };

  // Function to wrap only + and % in green
  const formatSuffix = (suffix) => {
    return suffix.split("").map((char, i) => {
      if (char === "+" || char === "%" || char === "7" ) {
        return (
          <span key={i} className="text-[#61ad41] font-bold">
            {char}
          </span>
        );
      }
      return <span key={i}>{char}</span>; // normal color
    });
  };

  return (
    <section className="mt-20 px-5">
      <div className="max-w-screen-xl m-auto">
        <div className="bg-[#f6f4f0] p-10 rounded-[20px]">
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-15 text-center">

            {data.map((item, i) => {
              const { num, suffix } = splitValue(item.value);

              return (
                <div
                  key={i}
                  ref={(el) => (itemsRef.current[i] = el)}
                  className="fade-up"
                  data-delay={i * 150}
                >
                  <h3 className="text-[20px]">
                    {item.title.split(" ")[0]}{" "}
                    <span className="text-[#61ad41] font-bold">
                      {item.title.split(" ")[1]}
                    </span>
                  </h3>

                  <h2 className="text-[58px] font-medium">
                    {num}
                    {formatSuffix(suffix)}
                  </h2>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
