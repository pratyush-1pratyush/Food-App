import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({ restaurant }) => {
  const{
  name,
  cuisines,
  cloudinaryImageId,
  costForTwoString,
  area,
  avgRating,
  lastMileTravelString,
  deliveryTime
 
} = restaurant;
  //console.log(restaurant?.data?.data);
  //const { name, cuisines, cloudinaryImageId, avgRating } = restaurant;
  return (
    <div className="w-64 m-8 p-1 hover:shadow-2xl hover:border-gray-900">
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
      <h2 className="font-bold ">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating}✨</h4>
      <h4>{area}</h4>
      <h4>Delivered in {deliveryTime} mins</h4>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
