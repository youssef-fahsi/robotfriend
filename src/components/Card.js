import React from 'react';

const Card = ({id,name,email}) => {

return (
    
   <div className = 'bg-light-blue dib br3 pa3 ma2 grow pw2 shadow-5 mw7 mh1 '>
      <img className=  'mw4'  alt='Robot' src ={` http://robohash.org/${id}?40x40`} />
      <div>
          <h2 className=  'f6'> {name} </h2>
          <p> {email} </p> 
       </div>
    </div>

   );

}
export default Card;