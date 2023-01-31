import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";
import {FaReact} from 'react-icons/fa'

const About = () => {
  return (
    <div>
      <section>
        <h1>About Me</h1>
        <hr />
      </section>
      <section>
        <p>
          I am a Computer Science and Engineering student from Rajiv Gandhi
          Institute of Technology, Kottayam of 2023 batch. I'm currently working
          with a small team at Padhakku, for an internship. I volunteer as the
          Student Coordinator for the Career Guidance and Placement Cell at my
          college. I have experience with web application security and have
          participated in vulnerability disclosure programs, notably Hackerone,
          where I have reported bugs to companies. Here is a list of the
          technologies that I use
        </p>
        <Image src="/profile.png" alt="Shijoy Bharath" height="200" width="200"/>
      </section>
      <section>
        <FaReact/>
        <FaReact/>
        <FaReact/>
        <FaReact/>
        <FaReact/>
      </section>
    </div>
  );
};

export default About;
