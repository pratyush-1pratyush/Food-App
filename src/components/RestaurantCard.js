import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({ restaurant }) => {
  const{
  name,
  cuisines,
  cloudinaryImageId,
  costForTwo,
  areaName,
  avgRatingString,
  sla,
} = restaurant;
  //console.log(restaurant?.data?.data);
  //const { name, cuisines, cloudinaryImageId, avgRating } = restaurant;
  return (
    <div className="w-64 m-8 p-1 hover:shadow-2xl hover:border-gray-900">
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
      <h2 className="font-bold ">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{`${avgRatingString} ⭐ `}</h4>
    </div>
  );
};

export default RestaurantCard;
