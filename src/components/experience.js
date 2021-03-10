import React from "react";
import searchImg from "../images/search.png";
import wwwImg from "../images/www.png";
import techImg from "../images/tech.png";
import codingImg from "../images/ideas.png";
import radioImg from "../images/control-panel.png";

const exp = [{
  title: "Software Engineer, Applications",
  image: radioImg,
  company: "RefleXion Medical",
  date: "2019 - 2020",
  description: ["Write Full Stack JavaScript applications","Create UI for medical radiotherapy machines","Follow best testing and design practices", "Angular, TypeScript, RxJS, NestJS, SCSS, MongoDB"]
},{
  title: "Full Stack Web Development Assistant Instructor",
  image: wwwImg,
  company: "UCBerkeley Extension Boot Camp",
  date: "2018 - 2019",
  description: ["Mentor junior engineers","Perform code reviews and establish best practices","Communicate technical concepts"]
},{
  title: "Web Development Mentor",
  image: codingImg,
  date: "2017 - 2019",
  company: "",
  description: ["Explain web fundamentals and JavaScript language ","Teach API integration with web applications","Elucidate common data structures and algorithms"]
},{
  title: "Software Engineer",
  image: techImg,
  date: "2014 - 2016",
  company: "Viadeo",
  description: ["Built Ember web applications from scratch for Seach and Profile pages","Wrote geolocation-based matching application","Integrated Algolia search API for Ember Data ORM and Node endpoints","Rewrote Backbone search header for auto-suggestion"]
},{
  title: "QA Engineer",
  image: searchImg,
  company: "RTLabs",
  date: "2013",
  description: ["Coded WebDriver automated navigation tests in Ruby"]
}
];


export default function(props){
  return (
      <section className='experience'>
        <h2 className='heading' style={{
        color: 'snow',
        backgroundColor: "black",
        padding: "20px"
      }}>Experience</h2>
        {exp.map((e)=>{
          return <div className="text-container" key={e.title}>
          <div className="xp-flex" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <img src={e.image} style={{
              height: "10rem",
              margin: "5%"
            }} />
            <div className="xp-text">
              <h2 className="title">{e.title}</h2>

              <div className="xp-sub" style={{
                fontSize: "0.8em",
                color: "black"
              }}>
                <div className="">{e.company}</div>
                <div className="">{e.date}</div>
              </div>
              <hr/>
              {e.description.map((des)=><p className="" key={des}>{des}</p>)}
              </div>
            </div>
          </div>
        })}
        
      </section>
    )
}