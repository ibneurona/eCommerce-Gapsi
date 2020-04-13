import React,{useEffect, useState} from 'react';
import './avatar.css';


const Avatar = () =>{
  
  const [person , setPerson] = useState(null);

  useEffect (() => {
    const usrUrl = 'https://randomuser.me/api';
      fetch(usrUrl)
      .then(res => res.json())
      .then(res =>{
        const persona = res.results[0];
        console.log(persona);
        setPerson(persona)
      })

  },[]);
   
  return(
    <div>
      {person  && 
        <span className="frame-avatar">
          <img
            className = "rounded-circle rounded-lg mx-auto d-block"
            src={person.picture.large}
            alt="avatar"
          />
        </span>
      } 
    </div>
  );
}

export default Avatar