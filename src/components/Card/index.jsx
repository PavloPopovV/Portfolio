import React from "react";
import Button from "../../ui/Button";

const Card = ({ data }) => {
  const { date, name, description, imgUrl, gitUrl, webUrl } = data;

  return (
    <div className="sm:flex items-center md:items-start gap-[20px] mb-[60px]">
      <div className="sm:w-[600px]">
        <img
          src={imgUrl}
          alt="work image"
          className="border-sm border-[1px] w-[400px] h-[250px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-between w-full py-[5px]">
        <div className="">
          <span className="text-[12px] text-gray-500 mb-[10px] block">
            {date}
          </span>
          <h3 className="leading-[20px] mb-[5px] font-medium text-[18px] md:text-[24px] pl-[25px] relative after:content-[''] after:absolute after:w-[15px] after:h-[2px] after:bg-yellow-500 after:left-0 after:top-[50%] after:translate-y-[-50%]">
            {name}
          </h3>
          <span className="block mb-[20px] lg:text-[16px] text-[14px]">{description}</span>
        </div>
        <ul className="flex gap-[30px] uppercase ">
          <li>
            <Button text="git" url={gitUrl} addClass="block"/>
          </li>
          <li>
            <Button text="website" url={webUrl} addClass="block"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
