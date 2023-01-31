import React from 'react'
import {BsGithub} from 'react-icons/bs'
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div>
        <section>
        <Image src="/profile.png" alt="BusTracker" height="200" width="300" />
        <div>
          <h2>Project One</h2>
          <h1>BusTracker</h1>
          <div>
            <p>
              A full stack application that provides user with bus details such
              as routes, bus timings and curent location of buses. Built using
              MERN Stack and Tailwind CSS.
            </p>
          </div>
          <div>
            <h3>React</h3>
            <h3>React</h3>
            <h3>React</h3>
            <h3>React</h3>
          </div>
          <div>
          <BsGithub/>
          <BsGithub/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectCard