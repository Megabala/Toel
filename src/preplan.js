import React from 'react'
import "./HomeBody.css"
import Nav from "./navbar"
import {Link} from "react-router-dom"
function HomeBody() {
  return (
    <>
    <Nav/>
    <div className="body-home">
            <div className='offlinemap'>
            <Link to="/ma"><img src="map1.png" height="280px" width="210"/></Link>
            <h3 className='desc'>Offline Map</h3>
            </div>
            <div className='review'>
            <img src="review.jpg" height="280px" width="210"/>
            <h3 className='desc'>Review</h3>
            </div>
            <div className='calc'>
            <Link to="/con"><img src="calc2.png" height="280px" width="210"/></Link>
            <h3 className='desc'>Convertor</h3>
            </div>
            <div className='lang'>
            <Link to="/lan"><img src="lang.jpg" height="280px" width="210"/></Link>
            <h3 className='desc'>Lang Help</h3>
            </div>
            <div className='info'>
            <Link to="/info"><img src="rules.jpg" height="280px" width="210"/></Link>
            <h3 className='desc'>Information</h3>
            </div>
    </div>
    </>
  )
}

export default HomeBody