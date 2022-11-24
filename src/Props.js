import React from "react";
function Propss(props){
    const mystyle={width:600,height:600}
    return(
        <>
        <img src={props.contact.url}/>
        <img src={props.contact.url1}/>
        </>
    )
}
export default Propss
