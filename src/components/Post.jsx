import React, { useState, useEffect } from "react";
import Header from "./Header";
import Noted from "./Noted";
import axios from 'axios';
import $ from "jquery";
import Tilt from 'react-parallax-tilt'

function Post(){
    $('link[href*="../index.css"]').prop('disable', true);
  const [notes, setNotes] = useState([]);
  useEffect(()=>{$('link[href*="../index.css"]').prop('disable', true);},[]);

  useEffect(()=>{
    fetch("https://webspirebackend.onrender.com/poost").then(res => res.json())
       .then(jsonRes =>{ 
        jsonRes.reverse();
        setNotes(jsonRes);});
  })

  useEffect(()=>{
  
    console.log(notes);
  },[]);


  return (
    <div className="appoo">
      <Header />      
      {notes.map((noteItem, index) => {
        return (
          <div>
          <Tilt className="tilt"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={1000}
          scale={0.93}
          gyroscope={true}>
          <Noted
            User={noteItem.Username}
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            
            _id={noteItem._id}
            url={noteItem.url}
          /></Tilt>
          <div className="gap"></div>
          </div>
        );
      })}
      {/* <div className="foot"><hr style={{color:"pink"}} /></div>
      <Footer /> */}
    </div>
  );
}

export default Post;