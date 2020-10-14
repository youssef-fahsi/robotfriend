import React from 'react';


const Scroll = (props) =>{
  return (


   <div className= ' mw8  center ' style= {{ overflow : 'Scroll', border: '2px solid black', height : '550px'}}> 
     
     {props.children}

   </div>
    


  	)


};

export default Scroll;