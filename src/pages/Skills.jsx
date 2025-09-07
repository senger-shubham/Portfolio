import React from "react";

function Skills() {
    return (
        <section id="skills">
            <div className="w-full h-[830px]">
                <div className="pt-[100px] flex flex-col justify-center items-center ">
                    <h1 className=" text-3xl font-semibold ">My Skills</h1>
                    <h3 className="text-red-700 font-bold"> - What I know -</h3>
                </div>
                <div className="w-full h-[664px] flex flex-row justify-center pt-10 pl-30 text-gray-800">
                    <div className="  w-[50%]  flex flex-col  pt-40"><h1 className="font-semibold text-2xl  ">My creative skills & experiences.</h1><br></br>
                    <p>n my portfolio, the skills section reflects my expertise in software engineering and frontend development, with a strong grasp of data structures and algorithms. I am proficient in Java and web technologies such as HTML, CSS, JavaScript, and ReactJS, and I am currently expanding my skills in backend development with Spring Boot.</p>
                    </div>
                    <div className="  w-[50%]  pt-15 pl-10" >
                        <ol className="list-disc list-inside text-lg text-gray-800 space-y-4">
                            <li className="border-b-4 border-gray-800 py-2 w-1/2 ">Java</li>
                            <li className="border-b-4 border-gray-800 py-2 w-1/2 ">Oops</li>
                            <li className="border-b-4 border-gray-800 py-2 w-1/2 ">DSA</li>
                            <li className="border-b-4 border-gray-800 py-2 w-1/2 ">My SQL Data Base</li>
                            <li className="border-b-4 border-gray-800 py-2 w-1/2 ">React Js</li>
                            <li className="border-b-4 border-gray-800 py-2 w-1/2 ">JavaScript</li>
                            <li className="border-b-4 border-gray-800 py-2 w-1/2 ">Tailwind CSS</li>
                            <li className="border-b-4 border-gray-800 py-2 w-1/2 ">HTML</li>
                            <li className="border-b-4 border-gray-800 py-2 w-1/2 ">Css</li>
                        </ol>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Skills