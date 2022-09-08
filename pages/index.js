import axios from "axios";
import React from "react";
import Image from "next/image";
import NavBar from "../components/navBar";
import Card from "../components/card";
import Router, { useRouter } from "next/router";

export const getServerSideProps = async () => {
  const response = await axios.get(
    `https://inshorts.deta.dev/news?category=automobile`
  );
  const dateTime = response.data.data;
  return {
    props: {
      dateTime: dateTime,
    },
  };
};

const ServerSideRendering = ({ dateTime }) => {
  const router = useRouter();

  const ReadMore = (item) => {
    Router.push({
      pathname: `/${item.author}`,
      query: {
        title: item.title,
        author: item.author,
        content: item.content,
        date: item.date,
        imageUrl: item.imageUrl,
        readMoreUrl: item.readMoreUrl,
      },
    });
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-wrap justify-evenly bg-gradient-to-r from-cyan-500 to-blue-500">
        {dateTime.map((item, index) => {
          return (
            <div key={index}>
              <Card
                title={item.title}
                imageUrl={item.imageUrl}
                author={item.author}
                date={item.date}
                klik={() => ReadMore(item)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServerSideRendering;
