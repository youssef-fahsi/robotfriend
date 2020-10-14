import React from 'react';


const SearchBox = ({searchfield,searchChange}) => {
return (
   <div className = 'pa2 dib mw6'>


 <input 
 className = 'pa3 ba b--green bg-lightest-blue '
 type ='search'  
 placeholder = 'Search For User' 
 onChange = {searchChange} />


   </div>
     


	)


}
export default SearchBox;