import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { json, useParams } from "react-router";

const Restromenu = () => {
  const [menu, setmenu] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchmenu();
  }, []);

  async function fetchmenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json_data = await data.json();

    setmenu(json_data);
    console.log(json_data.data.cards
    );
  }

  if (menu === null) return <Spinner />;

  const { name, cuisines, avgRating, city, areaName } =
    menu?.data?.cards[2]?.card?.card?.info;
  //console.log(menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)

  return (
    <div key={name}>
      <h1>{name}</h1>

      <p>{city}</p>
      <p>{areaName}</p>
      <p>{avgRating}</p>
    </div>
  );
};

export default Restromenu;
