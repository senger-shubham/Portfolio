import React from "react";

function Card() {
    return (
        <div>

            <div className="w-84 h-120 border-2 bg-black/80 text-white ml-40 mt-[20px] flex  items-center flex-col gap-2 transform ">
             
                <div className="w-[90%] h-[20%] border-1 bg-amber-600 mt-[40px]">
                    <h>Here we will put image or vedios</h>
                </div>
            
                <div className="w-[90%] h-[63%] border-1 bg-black/90">
                    <h>Here we will put image or vedios</h>
                    <div className="bg-red-700 rounded p-3 w-[150px] ml-[70px] mt-[170px] pl-[30px]">
                        <a href="">Visit Project</a>
                    </div>
                    <div className="ml-[50px] mt-[5px]">
                    <p>HTML,css,js</p>
                    </div>
                </div>
            
          </div>
            
        </div>

    )
}

export default Card
