import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>I am Luiz Mendes, a Systems Analysis and Development student with experience in development and technical support acquired during an internship at Trier Sistemas, where I worked directly in the city of Tubarão. I have skills in Java, React, and practical experience with WordPress.</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={1} years="8 months"/>
            <Skill image="/ts.png" measure={1} years="8 mmonths"/>
            <Skill image="/js.png" measure={2} years="1 years"/>
            <Skill image="/java.png" measure={3} years="2 years"/>
            
          </div>
        </div>
    )
}