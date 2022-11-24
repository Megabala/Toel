import React from 'react'
import HomeNav from './navbar'
import './map.css';
export default function MAP() {
  return (
    <div>
      <div>
      <HomeNav/>
      
    </div>
    <div className="map">
    <img src='mapp.jpeg'/>
    <form className="hi">
  
  <button className="btn">DOWNLOAD OFFLINE MAPS</button>
  
</form>
<form className="bt">
<button>RESTAURANTS</button>
<button>HOTELS</button>
<button>THINGS TO DO</button>
<button>MUSEUMS</button>
<button>ATM'S</button>
</form>
</div>
    </div>
  )
}