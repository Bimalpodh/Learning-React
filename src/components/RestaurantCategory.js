import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
   setShowIndex();
   
  };

  return (
    <div>
      {/* Header */}
      <div className="accordionHeader w-full bg-gray-50 shadow-lg p-4 border-y-4 text-lg text-center  ">
        <div
          className="category-header flex justify-between cursor-pointer "
          onClick={handleClick}
        >
          <span className="font-bold text-2xl pb-3">
            {data?.title} ({data?.itemCards?.length || 0})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>

        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
