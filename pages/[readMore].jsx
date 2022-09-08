import React from 'react'
import Link from 'next/link'
import Router, { useRouter } from "next/router";
import NavBar from '../components/navBar';

const ReadMore = () => {
  const router = useRouter();
  return (
    <>
      <NavBar />
      <div className="flex justify-center sm:pt-20">
        <div className='bg-slate-700/20 rounded-lg p-10 sm:w-9/12'>
          <div className='flex justify-center sm:flex-none'>
            <h1 className='font-bold text-center text-2xl sm:mb-12'>{router.query.title}</h1>
          </div>
          <img src={router.query.imageUrl} className='mr-4 w-auto h-52 sm:float-left' alt={router.query.title} />
          <p className='text-justify mb-16'>{router.query.content}</p><br />
          <div className='flex flex-col'>
            <h3 className=''>Date: {router.query.date}</h3>
            <h3>Author: {router.query.author}</h3>
            <button className='rounded-full bg-blue-700 text-white italic px-4'>
              <a href={router.query.readMoreUrl}>Read More News</a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReadMore