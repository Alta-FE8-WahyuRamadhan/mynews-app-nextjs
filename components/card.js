import React from "react";
import Image from "next/image";

const Card = ({ title, imageUrl, author, date, klik }) => {
  return (
    <div className="bg-lime-700/50 w-60 h-auto rounded m-2">
      <h1 className="text-white font-bold text-center my-2">{title}</h1>
      <Image
        unoptimized={true}
        className="w-full h-52 w-full"
        src={imageUrl}
        alt={author}
        width={500}
        height={500}
      />
      <h2 className="mt-2 text-white ">Author :{author}</h2>
      <p className="text-white">Date :{date}</p>
      <div className="text-white flex justify-center mt-2 pb-2">
        <button
          onClick={klik}
          className="rounded-full px-2 text-white font-bold italic bg-blue-500 text-yellow-300"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
