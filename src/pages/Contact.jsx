import React from "react";
import Footer from "../components/Footer";

function Contact(){
    return(
<section id="contact">
  <div className="w-full h-[800px] ">

         
            <div className="pt-[100px] flex flex-col justify-center items-center ">
                    <h1 className=" text-3xl font-semibold ">Contact Me</h1>
                    <h3 className="text-red-700 font-bold"> - Get In Touch -</h3>
                </div>
        
        <div className="flex  flex-col gap-10 justify-center items-center pt-50 text-2xl font-semibold">
            <div>Name :     Shubham Singh</div>
            <div>Address :    Lucknow</div>
            <div>Email :    swapan.9057316@gmail.com</div>
            <div><a href="https://www.linkedin.com/in/shubham-singh-597a38229/">LinkedIn</a></div>
             <div><a href="https://github.com/senger-shubham">GitHub</a></div>
             <div><a href="https://leetcode.com/u/Shubhu_thakur7/">LeetCode</a></div>
        </div>

       <div className="h-[100px] w-full pt-[700px] ">
       
        <Footer/>
        
        </div>   
        
 </div>
</section>
    )
}

export default Contact