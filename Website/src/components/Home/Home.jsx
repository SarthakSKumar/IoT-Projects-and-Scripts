import React from "react";
import "./home.css";
import { data } from "./Data";

const Home = () => {
    return (
        <>
            <section className=' mb-[3rem] mt-[6rem]'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {data.map((item) => {
                        return (
                            <div className='main-card overflow-hidden mx-auto my-[1rem] p-0 rounded-2xl '>
                                <div className='card-container w-[10rem] h-[8rem] ss:w-[15rem] ss:h-[9rem] sm:w-[17rem] sm:h-[10rem] md:w-[20rem] md:h-[13rem]'>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='w-full h-full p-0 m-0'
                                    />
                                    <div className='card-data w-full h-[5rem] sm:h-[6rem] lg:h-[8rem] px-2 py-1 m-0 bg-[rgba(0,0,0,0.5)] relative bottom-[2.0rem] ss:bottom-[2.1rem] sm:bottom-[2.3rem] rounded-xl'>
                                        <h3 className='text-md sm:text-lg md:text-xl font-bold text-white'>
                                            {item.name}
                                        </h3>

                                        <a
                                            href={item.link}
                                            className=' git-links border-b-2 text-[#FDF4F5] '
                                            target='_blank'
                                        >
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Home;
