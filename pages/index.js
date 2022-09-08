import axios from "axios";
import React, { useEffect } from "react";

export const getServerSideProps = async () => {
  const response = await axios.get(
    `https://inshorts.deta.dev/news?category=politics`
  );
  const dateTime = response.data.data;
  return {
    props: {
      dateTime: dateTime,
    },
  };
};

const ServerSideRendering = ({ dateTime }) => {
  console.log("date time: ", dateTime);
  return (
    <div>
      <p>Ini Server Side Rendering</p>
      {dateTime.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ServerSideRendering;
