import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="  ">
      {items.map((item, index) => (
        <div
          key={item.card.info.id || index}
          className=" text-left border-b-2 border-b-zinc-300 py-5  flex justify-between  "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold text-teal-700">
                {item.card.info.name}
              </span>
              <div className="font-bold text-orange-600">
                {" "}
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
            </div>
            <p className="mr-80 text-justify  text-wrap">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 flex flex-col items-center">
            <img
              className="recipeImg h-44 w-44 rounded-xl shadow-lg shadow-blue-600 p-2 bg-white"
              alt="recipeImg"
              src={CDN_URL + item.card.info.imageId}
            />
            <button
              onClick={() => handleAddItem(item)}
              className="my-3 w-16 h-10 text-white text-center border bg-black rounded-lg hover:bg-cyan-800 hover:font-normal"
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
