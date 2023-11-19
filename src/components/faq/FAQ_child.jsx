import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const FAQ_child = ({ open, toggle, title, desc }) => {
  const [height, setHeight] = useState(open ? 'auto' : 0);
  const contentRef = useRef(null);

  useEffect(() => {
    setHeight(open ? `${contentRef.current.scrollHeight}px` : '0');
  }, [open]);

  const handleToggle = () => {
    toggle();
  };

  return (
    <div className="py-[20px] max-w-[1000px]">
      <div
        className={`bg-blue-400 flex justify-between items-center cursor-pointer rounded-md border border-indigo-600 py-[10px] transition duration-500 ease-in-out`}
        onClick={handleToggle}
      >
        <p className="text-[20px] font-semibold">{title}</p>
        <div className="text-[30px]">
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>

      <div
        ref={contentRef}
        className="bg-blue-100 px-[50px]  rounded-b-md overflow-hidden my-[3px]"
        style={{ maxHeight: height, transition: 'max-height 0.5s ease-in-out' }}
      >
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FAQ_child;