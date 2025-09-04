import React from "react";
import projectpic from "../assets/image.webp";
import Projects from "../pages/Projects";

function Card({ title, discription, image, link, tech }) {
    return (
        <div>

            <div className="w-84 h-140  bg-[rgb(34,34,34)] text-white ml-40 mt-[20px] flex  items-center flex-col gap-2 transform ">

                <div className="w-[90%] h-[20%] border-1 bg-amber-600 mt-[40px]">
                    <img src={image} alt="logo" className="w-[100%] h-[100%] object-cover" />
                </div>

                <div className="w-[90%] h-[68%] border-1 bg-black/90">
                    <div className=" ">
                        <div className=" mt-7 flex justify-center"><h1 className="text-2xl font-bold">{title}</h1></div>
                        <div className="mt-7 "><p className="text-center">{discription}</p></div>
                    </div>
                    <div className="bg-red-700 rounded p-3 w-[150px] ml-[70px] mt-[70px] pl-[30px]">
                        <a href={link}>Visit Project</a>
                    </div>
                    <div className="ml-[50px] mt-[5px]">
                        <p>{tech}</p>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Card