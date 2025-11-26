import React, { useState, useRef, useEffect } from "react";

const AccordionItem = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (open) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

  return (
    <div className="py-4 border-b border-gray-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center"
      >
        <span className={`text-lg ${open ? "font-semibold text-black" : "text-gray-700"}`}>
          {title}
        </span>
        <span className="text-2xl leading-none">{open ? "-" : "+"}</span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="mt-3 text-gray-600">
          {content}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="w-80   m-auto ">
      <AccordionItem 
        title="Skincare"
        content="Fresh energy and healthy time with refreshing minty moods."
      />
      
      <AccordionItem 
        title="What is your skin"
        content="Another description content goes here."
      />

      <AccordionItem 
        title="Remove tan"
        content="Fresh energy and healthy time with refreshing minty moods."
      />
    </div>
  );
};

export default Accordion;
