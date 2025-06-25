import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled Software Developer & Full Stack Developer with experience in Java , Python and
        JavaScript.I have expertise in frameworks & Database like React.js, Node.js, Next.js, Tailwindcss,
        Three.js, MongoDB, MySQL and Supabase. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>
      
 <div className="mt-8 flex flex-col sm:flex-row justify-start gap-4">
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    href="https://github.com/Lokesh-Shimpi"
    target="_blank"
    rel="noopener noreferrer"
    className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <span className="flex items-center bg-tertiary px-6 py-2 rounded-[20px] font-bold text-white hover:bg-primary transition w-full h-full">
      <FaGithub size={20} className="mr-2" />
      Github
    </span>
  </motion.a>
  <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  href="https://www.linkedin.com/in/lokesh-shimpi-83a0a02b2/"
  target="_blank"
  rel="noopener noreferrer"
  className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
>
  <span className="flex items-center bg-tertiary px-6 py-2 rounded-[20px] font-bold text-white transition w-full h-full hover:bg-[#0077b5]">
    <FaLinkedin size={20} className="mr-2" />
    Linkdin
  </span>
</motion.a>
  <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
>
  <span className="flex items-center bg-tertiary px-6 py-2 rounded-[20px] font-bold text-white hover:bg-[#707270] transition w-full h-full block">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-8m0 8l-4-4m4 4l4-4M4 20h16" />
    </svg>
    Resume
  </span>
</motion.a>
</div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
