import React from "react";


const links = [{
  url: 'https://github.com/awwest',
  title: 'Github'
},{
  url: 'https://repl.it/@awwest',
  title: 'Repl.it'
},{
  url: 'https://app.codesignal.com/profile/awwest',
  title: 'CodeSignal'
},{
  url: 'https://linkedin.com/in/alexwwest',
  title: 'LinkedIn'
},{
  url: 'https://angel.co/alex-west',
  title: 'AngelList'
},{
  url: 'https://www.viadeo.com/p/002ou9389bi0pxa',
  title: 'Viadeo'
},{
  url: 'https://www.hackerrank.com/awwest',
  title: 'HackerRank'
},{
  url: 'https://about.me/alex.west',
  title: 'about.me'
},{
  url: 'https://stackoverflow.com/users/3268028/awest',
  title: 'StackOverflow'
}

]

export default function(props){
  return (
    <section className="social">
      <h2 className="heading" style={{
        color: 'snow',
        backgroundColor: "black",
        padding: "20px"
      }}> Find me around the net </h2>
      <div className="links-container">
      {
        links.map((site)=>(
          <a className="social-link" href={site.url} key={site.url}>{site.title}</a>
        ))
      }
      </div>
    </section>
    )
}