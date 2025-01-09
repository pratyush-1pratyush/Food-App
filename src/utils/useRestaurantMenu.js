import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config.js";
import localData from "../resData.json"
import { getMenuFromResID, idIndexPair } from "../utils/helper.js";
import { ARRAY_OF_MENU_OF_RESTAURANTS } from "../mocks/mockData.js";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const  Menu = getMenuFromResID(
      resId,
      ARRAY_OF_MENU_OF_RESTAURANTS,
      idIndexPair
    );
    //console.log(resId,"id useResHook")
    //console.log(Menu,"menu useResHook")
    setRestaurant(Menu);
  }, []);

 // async function getRestaurantInfo() {
    //const data = await fetch(FETCH_MENU_URL + resId);
    //const json = await data.json();
   
   // setRestaurant();
   
    //console.log(localData.data,"dta");
  //}

  return restaurant;
};

export default useRestaurantMenu;
