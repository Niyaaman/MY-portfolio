import React from 'react';
import { VscAccount } from "react-icons/vsc";
import { MdEventAvailable } from "react-icons/md";



export default function About() {
    const techStack = [
      { name: 'React.js', logo: 'react', color: 'hover:border-[#61DAFB]' },
      { name: 'Node.js', logo: 'nodedotjs', color: 'hover:border-[#5FA543]' },
      { name: 'Figma', logo: 'figma', color: 'hover:border-[#F24E1E]' },
      { name: 'SQL', logo: 'sqlite', color: 'hover:border-[#003B57]' }, // Using SQLite/SQL generic icon
      { name: 'Firebase', logo: 'firebase', color: 'hover:border-[#FFCA28]' },
  ];
  return (
    <div className='flex justify-center items-center flex-col h-auto py-12 ' id='about'>
      <h1 className='text-4xl font-serif'>About me</h1>
      <div className='m-12 flex lg:flex-row gap-10  min-[200px]:flex-col'  >
        <diV className='w-80 h-52 bg-white/30 backdrop-bulr-50  rounded-lg flex justify-center items-center flex-col moviment ' >  
          <VscAccount className='w-20 h-20 text-green-500  m-5' />
          <h1 className='font-bold'>100% Satisfaction</h1>
        </diV>
        <diV className='w-80 h-52 bg-white/30 backdrop-bulr-50  rounded-lg flex justify-center items-center flex-col moviment'>
          <MdEventAvailable className='w-20 h-20 text-green-500 m-4 ' />
          <h1 className='font-bold '>24/7 Available</h1>
        </diV>
      </div>


      <div className="max-w-5xl mx-auto px-6 py-12 text-center" >
        {/* Section Title */}
        <h2 className="font-serif text-4xl text-gray-900 mb-8">My Tech Stack</h2>
        
        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className={`bg-white border w-44 border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-sm transition-all duration-300 transform hover:-translate-y-1 ${tech.color}`}
            >
              {/* Dynamic Official Tech Image Vector */}
              <img 
                src={`https://cdn.simpleicons.org/${tech.logo}`} 
                alt={`${tech.name} logo`} 
                className="w-12 h-12 object-contain"
              />
              {/* Tech Name Text */}
              <span className="font-sans font-medium text-sm text-gray-800">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>


      <div>
        
      </div>
      
    </div>
   )
}