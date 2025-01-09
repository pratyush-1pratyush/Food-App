import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import Menu from "./Menu";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //console.log(resId);

  const restaurant = useRestaurantMenu(resId);
  //console.log(restaurant,"restaurant RestaurantMenu comp");
  //const itemCards = restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
 // console.log(itemCards,"cardItem");
  //const basicInfo = restaurant?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  //console.log(basicInfo,"city")

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div
      data-testid="Menu"
      className="max-w-screen-md min-h-[90%] mt-0 mx-auto my-auto mb-0"
    >
      <div className="">
       
        <div className="flex justify-between px-4 py-4 pt-9 pb-9 border-solid border-b-2">
          <div className="">
            <h1 className="font-bold text-2xl">{restaurant.name}</h1>

            <p className="text-sm">{restaurant?.cuisines.join(", ")}</p>
            <p className="text-sm">
            📍 {restaurant?.area}, {restaurant?.city}
            </p>
          </div>
          <div className="border-slate-200 border rounded p-1 text-xs text-center h-14 mt-auto mb-auto flex-col">
            <div className="border-b-2 p-1">{restaurant?.avgRatingString} ⭐</div>
            <div className="p-1">{restaurant?.costForTwoMsg}</div>
          </div>

          {/* <img
            className="w-14 h-14"
            src={IMG_CDN_URL + basicInfo.cloudinaryImageId}
          /> */}
        </div>
      </div>

      {/* {console.log(
        restaurant.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards
      )} */}

      <div className="px-4 py-4 pt-9 pb-9">
        <h1 className="text-2xl font-bold ">Menu</h1>
        <div>
          {Object.values(restaurant?.menu?.items).map((item, index) => (
            <div key={index}>
              <Menu Menu={item}></Menu>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
