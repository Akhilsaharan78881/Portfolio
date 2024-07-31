import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Akhil Kumar, a 2024 post graduate🎓 with a passion for crafting robust frontend systems and With expertise in frameworks like React and Maaterial-UI, along with a strong foundation in HTML, CSS, and JavaScript, C++, Java, SQL, DBMS, Data Structure, Git & Github.<a className='text-green-300 hover:text-green-500 duration-300' href='https://linkedin.com/in/akhil-kumar-551a13255/' target='_blank' rel="noreferrer"> Software developer</a> I specialize in Frontend Development🚀.
              <br />
              ✍️ Beyond coding, I stay in shape by regularly hitting the  <a className=' text-purple-300 hover:text-purple-400 duration-300'  target='_blank'>gym</a>, which not only helps me maintain my fitness but also motivates me to keep a balanced lifestyle and approach my work with renewed energy and focus.🌟</p>

            <ButtonLink
              url='https://drive.google.com/file/d/1e64OSGiwpMWLw1-0RRqBluk7qZQtSbbl/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;