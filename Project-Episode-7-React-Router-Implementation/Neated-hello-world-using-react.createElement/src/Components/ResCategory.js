import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, onClick }) => {
  return (
    <div>
      <div
        onClick={onClick}
        className="p-4 bg-gray-50  w-6/12 mx-auto my-4 cursor-pointer  "
      >
        <div className="flex justify-between">
          <span className="font-mono font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default ResCategory;
