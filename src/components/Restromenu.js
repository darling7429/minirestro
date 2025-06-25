import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { json, useParams } from "react-router";
import Rescategory from "./Rescategory";

const Restromenu = () => {
  const [menu, setmenu] = useState(null);


  const { id } = useParams();

  // in use effect if i don't use dependecy array it will cause infinite re renders and does this thing

  // React re-renders a component every time you call setState(), even if the new data looks the same.

  // This happens because React checks reference, not content — different object = trigger re-render.

  // After re-render, React creates a new virtual DOM from the updated JSX.

  // React compares the new virtual DOM with the old one (diffing process).

  // If nothing has changed visually, React skips real DOM updates, improving performance.

  // Let me know if you want a real-world analogy too!
  useEffect(() => {
    fetchmenu();
  }, []);

  async function fetchmenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json_data = await data.json();

    setmenu(json_data);
    
    
   
  }


  if (menu === null) return <Spinner />;

  const { name, cuisines, avgRating, city, areaName } =
    menu?.data?.cards[2]?.card?.card?.info;
    const completeAddressnumber =menu?.data.cards[4.].groupedCard.cardGroupMap.REGULAR.cards.length
    const completeAddress=menu?.data.cards[4.].groupedCard.cardGroupMap.REGULAR.cards[completeAddressnumber-1].card.card.completeAddress
   // console.log(typeof completeAddress)
    console.log(completeAddress)
  //console.log(menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  const filtered =
    menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((item) => {
      return (
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

    

  //console.log(filtered);

  return (
    <>
    <div className="res_intro">
       <p>{name}</p>
    <p>{cuisines.join(",")}</p>
    </div>
   
      {filtered.map((item,Index) => 
      <Rescategory key={item.card.card.title} 
      data={item.card.card} completeAddress={completeAddress}
       />)}
       <div className='address'>
      <p>Address:{completeAddress?completeAddress:""}</p>

    </div></>
    
  );
};

export default Restromenu;
