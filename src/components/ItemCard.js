import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { FOODITEM_IMG_URL } from "../config";
import { useState } from "react";
const itemCard = ({ foodItem }) => {
  //console.log(fooditem);
  const dispatch = useDispatch();
  const [addbtn, setAddBtn] = useState(false);
  const handleAddItem = (foodItem) => {
 
    dispatch(addItem(foodItem));
    setAddBtn(true);
  };
  
  return (
    <>
      <div className="flex justify-between items-center border-b-2 p-3">
      
        <div>
          <h2 className="text-base font-bold">{foodItem.name}</h2>
          <p>
            ₹{" "}
            {foodItem.price / 100 ||
              foodItem.defaultPrice / 100}
          </p>
          <div className="text-slate-600 text-sm">
            {foodItem.description}
          </div>
        </div>
        <div className="flex flex-col items-center w-40 h-15">
          {foodItem && (
            <img src={FOODITEM_IMG_URL + foodItem?.imageId} alt="" />
          )}

          <button
            data-testid="addbtn"
            onClick={() => handleAddItem(foodItem)}
            className="w-20 h-8 border border-slate-400 rounded text-green-600 mt-1"
          >
            {!addbtn ? "Add" : "Added"}
          </button>
        </div>
      </div>
    </>
  );
};
export default itemCard;
