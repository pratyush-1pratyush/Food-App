import { CAROUSEL_IMG_URL } from "../config.js";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <div className="bg-green-500 w-screen h-94 flex p-2 justify-between">
       
      <Link to=""> <img
          src={CAROUSEL_IMG_URL + "ngjatt8hwriaytmugmqz"}
          className="w-80 h-64 mr-1 hover:w-70"/></Link>
        
        <Link to=""> <img
          src={CAROUSEL_IMG_URL + "nbsluqgwsva4qo68dsoi"}
          className="w-80 h-64 mr-1 hover:w-70"
        /></Link>
         <Link to="">
        <img
          src={CAROUSEL_IMG_URL + "fkdxvbwlciuvwpwgl92r"}
          className="w-80 h-64 mr-1 hover:w-70"
        /></Link>
      
      <Link to=""><img
          src={CAROUSEL_IMG_URL + "dzm1eo2punmiqd1idyzn"}
          className="w-80 h-64 mr-1 hover:w-70"
        /></Link>
      </div>
    </>
  );
};
export default Carousel;
