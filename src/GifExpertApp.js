import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
 
 
const [categories,setCategories]=useState(['One Punch']);

/*const handleAdd =()=>{

  //setCategories([...categories,'Hunter']);
  setCategories(cats=>[...categories,'Hunter']);

}*/

  return (
    <>
         <h2>GifExpertApp </h2>
         <AddCategory setCategories={setCategories}/>

         <hr />
     

       <ol>
           {
                 categories.map( category => (
                 // return  <li key={category}  >  { category }</li>
                   <GifGrid 
                       key={ category }
                       category={ category } 
                   />

                 ))
           }

       </ol>
 

    </>
  )
}

//export default GifExpertApp
