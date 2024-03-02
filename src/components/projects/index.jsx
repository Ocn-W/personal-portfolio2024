"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { projects } from "../components/constants/arrays";
import ProjectOption from "../projectOptions";
import "./style.scss";
import { getPastelColor } from "../components/constants/arrays";
import FadeInTemplate from "../components/animations/template";

export default function Projects() {
  const ref = useRef();

  return (
    <FadeInTemplate screen={true} ref={ref}>   
      <section className="projects-container">
        <Parallax pages={projects.length}>
        {projects.map((option, index) => {
          const pastelColorBkg = getPastelColor();
          return (
          <ParallaxLayer offset={index} speed={1}>
            <ProjectOption
              title={option.name}
              description={option.description}
              techStack={option.techstack}
              dependencies={option.dependencies}
              demoLink={option.demoUrl}
              image={option.image}
              colorBackground = {pastelColorBkg}
              side={index % 2 === 0 ? "even" : "odd"}
              key={String(index)}
            />
          </ParallaxLayer>
          )
        })}
        </Parallax>
      </section>
    </FadeInTemplate>
  );
}
