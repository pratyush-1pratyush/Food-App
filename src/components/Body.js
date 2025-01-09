import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import useAllRestaurants from "../utils/useAllRestaurants.js";
import useOnline from "../utils/useOnline";
import RestaurantCard from "./RestaurantCard";
import Carousel from "./Carousel";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import MenuShimmer from "./MenuShimmer";
import localData from "../resData.json"
import { ALL_RESTAURANT_DATA, ALL_RESTAURANTS_LIST } from "../mocks/mockData";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState(true);

  console.log("initialRender");
  

  useEffect(() => {
    setFilteredRestaurants(ALL_RESTAURANTS_LIST);
    setAllRestaurants(ALL_RESTAURANTS_LIST);
   //api call
    // getRestaurants(setAllRestaurants, setFilteredRestaurants);
  }, []);

  

  /*async function getRestaurants() {
    
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
  
            // initialize checkData for Swiggy Restaurant data
            let checkData = localData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(checkData,"one")
  
            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              console.log(checkData,"two")
              return checkData;
            }
          }
        }
  
        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData( ALL_RESTAURANTS_LIST );
  
        // update the state variable restaurants with Swiggy API data
        //setAllRestaurants(ALL_RESTAURANTS_LIST);
        //console.log(resData)
        //setFilteredRestaurants(ALL_RESTAURANTS_LIST);
      }*/
    

  if (!allRestaurants) return null;

  //if (filteredRestaurants.length === 0) return <h1>No match found</h1>;

  if (filteredRestaurants.length === 0) return <Shimmer />;
  else {
    return (
      <>
        <div className="bg-slate-600 w-screen  "></div> 
        <Carousel />
        
        <div className="border flex justify-between items-center">
          <div className="text-lg font-bold ml-2">
           <i>Healthy Food Healthy Life</i>
          </div>
         
          <div className="mt-1 flex justify-center mr-2">
            <input
              data-testid="search-input"
              className="m-1 bg-slate-100 p-2 rounded-md focus-within:purple border-slate-500 border"
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
             data-testid="search-btn"
              className="bg-slate-500 text-white rounded-md m-1 w-20"
              onClick={() => {
                const data = filterData(searchText, allRestaurants);
                if (data.length) {
                  setFilteredRestaurants(data);
                  setSearchResult(true);
                } else setSearchResult(false);
              }}
            >
              Search
            </button>
          </div>
          </div>
        
        {/* <iframe
          className="hidden"
          src="https://cors-anywhere.herokuapp.com/corsdemo"
        ></iframe> */}
        <div 
        data-testid="res-list" 
        className="flex w-full flex-wrap justify-center">
          {searchResult ? (
            filteredRestaurants.map((restaurant) => {
              //console.log(restaurant,"individual res data");
              return (
                <Link to={"/restaurant/" + restaurant?.data?.id}key={restaurant.data.id}>
                   <RestaurantCard  restaurant={restaurant?.data}  /> 
                  
                </Link>
              );
            })
          ) : (
            <div className="w-full flex justify-center">
              <img
                className="w-[50%]"
                src="https://www.replaylistings.com/assets/images/result-not-found-1.png"
              />
            </div>
          )}
        </div>
      </>
    );
  }
};

export default Body;
