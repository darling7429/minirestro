import React, { useState } from 'react'
import Itemlist from './Itemlist'

const Rescategory = (props) => {
  
  
     const{data}=props
     const{title,itemCards,completeAddress}=data
     //console.log(title);
    
const[open,setopen]=useState(false)
     const clicked=()=>{
      
      setopen(!open)
     }
    
  return (
    <>
    
    <div className='category_parent'>
    <div className='category_head' onClick={()=>{clicked(title)}}>
    <p>{title}({(itemCards.length)})</p>
    <p >{open?"⬆️":"⬇️"}</p>
    </div>
    {open?<div className='category_body'>
      {itemCards.map((item)=><Itemlist data={item} key={item.card.info.name}/>)}
      

    </div>:""}
    
    </div>

    
    </>
    

  
  )
}

export default Rescategory