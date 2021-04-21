import React, {useState} from "react";
import "../App.css";
import Ratings from "./Ratings";


const Moviecard = ({movie :{Title, Year, PURL, rate, description } }) => {
 
  const [text, setText] = useState ('');

  const adddesc = () => {
    if (text === '') {
      setText(description);
    }else { 
      setText('');
    }
  };
  return (
     
    <article className="movie">
      <a target="_blank" >
      <img className="photo" src={PURL} alt="" />
      <h1>{Title}</h1>
      <h4 style={{ color: "#617d98" }}>{Year}</h4>
      </a>
      <Ratings nb={rate} />
      <div>
        <button onClick={adddesc}> description </button>
        <p> {text} </p>
      </div>
    </article>
    
  );
}

export default Moviecard
