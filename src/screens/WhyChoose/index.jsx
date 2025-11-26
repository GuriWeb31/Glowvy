import React, { useEffect, useRef } from "react";


const WhyChoose = () => {
  const itemsRef = useRef([]);
  const numberRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Fade-in animation with delay
            const delay = entry.target.getAttribute("data-delay");
            entry.target.style.transitionDelay = delay + "ms";
            entry.target.classList.add("show");

            // Start counter
            startCounter(index);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
  }, []);

  // Counter function
  const startCounter = (index) => {
    const el = numberRef.current[index];
    if (!el) return;

    const finalValue = parseInt(el.getAttribute("data-target"));
    let current = 0;
    const speed = 20; // smaller = faster

    const updateCounter = () => {
      if (current < finalValue) {
        current += Math.ceil(finalValue / 100); // smooth increment
        if (current > finalValue) current = finalValue;
        el.innerText = current;
        requestAnimationFrame(updateCounter);
      } else {
        el.innerText = finalValue; // ensure final number
      }
    };

    updateCounter();
  };

  const data = [
    { title1: "Families", title2: "Supported", value: 50, suffix: "K+" },
    { title1: "Care", title2: "Availability", value: 24, suffix: "/7" },
    { title1: "Client", title2: "Satisfaction", value: 98, suffix: "%" },
    { title1: "Award-", title2: "Winning", value: 40, suffix: "+" },
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
                data-delay={i * 150}
              >
                <h3 className="text-[20px]">
                  {item.title1}{" "}
                  <span className="text-[#61ad41] font-bold">{item.title2}</span>
                </h3>

                <h2 className="text-[58px] font-medium">
                  <span
                    ref={(el) => (numberRef.current[i] = el)}
                    data-target={item.value}
                  >
                    0
                  </span>
                  <span className="text-[#61ad41] font-bold">{item.suffix}</span>
                </h2>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
