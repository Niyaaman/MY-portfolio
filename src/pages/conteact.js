import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

    export default function Contact() {
        return(
            <div id="contact" className="flex justify-center items-center h-auto py-12 flex-col">
                <div  className="rounded-md shadow-[5px_5px_20px_rgba(6,182,212,0.5),_-5px_-5px_20px_rgba(217,70,239,0.5)] border border-bg-primary h:2/3 min-[320px]:h-7/8 w-3/5 flex justify-center items-center flex-col ">
                    <div className="grid justify-center items-center p-8   lg:grid-cols-2 min-[200px]-grid-flow-col min-[200px]:grid-rows-3  gap-5 ">

                        <slection  className='selectiontextinputcss'>
                            <lable className='mb-3 ml-3 ' >
                                First Name
                            </lable>
                            <input type="text" placeholder="Mathisivam" className="textinputcss" />
                        </slection>
                        <slection  className='selectiontextinputcss'>
                            <lable className='mb-3 ml-3 ' >
                                last Name
                            </lable>
                            <input type="text" placeholder="Niyaaman" className="textinputcss" />
                        </slection>

                    
                        <slection  className='selectiontextinputcss md:col-span-2 min-[200px]:col-span-1 '>
                            <lable className='mb-3 ml-3 ' >
                                Email
                            </lable>
                            <input type="text" placeholder="niyaaman05@gmail.com" className="textinputcss" />
                        </slection>
                        
                        <slection  className='selectiontextinputcss'>
                            <lable className='mb-3 ml-3 ' >
                                Name
                            </lable>
                            <input type="text" placeholder="Niyaaman" className="textinputcss" />
                        </slection>
                            

                    </div>
                        <button className="border border-purple-700 text-center  px-10 py-3 rounded-full   hover:shadow-inner hover:bg-purple-600 hover:font-serif my-16">
                            sent me 
                        </button>
                    
                </div>
                <div className="flex     min-[200px]:flex-col lg:flex-row  h-5/6">
                    <div className="contactme moviment ">
                        <div className="bg-orangcl w-16 h-16 rounded-full justify-center items-center flex" > 
                            <MdOutlineEmail  className="h-10 w-10 text-white "/> 
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-bold  m-3">Email </h1> <h1  className="font-light text-gray-700 m-1">niyaaman05@gmail.com</h1>
                        </div>
                    </div>

                    
                    <div className="contactme moviment ">
                        <div className="bg-green-600 w-16 h-16 rounded-full justify-center items-center flex" > 
                            <FaPhone   className="h-10 w-10 text-white "/> 
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-bold  m-3">Phone </h1> <h1  className="font-light text-gray-700 m-1">94762926801</h1>
                        </div>
                    </div>

                    <div className="contactme moviment ">
                        <div className="bg-blue-600 w-16 h-16 rounded-full justify-center items-center flex" > 
                            <MdLocationOn  className="h-10 w-10 text-white "/> 
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-bold  m-3">Location </h1> <h1  className="font-light text-gray-700 m-1"> Batticaloa, Srilanka </h1>
                        </div>
                    </div>
                    

                </div>
            </div>
        )
    }
