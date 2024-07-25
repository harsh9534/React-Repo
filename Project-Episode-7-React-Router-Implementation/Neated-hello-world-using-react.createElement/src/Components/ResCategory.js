import ItemList from "./ItemList";
import { useState } from "react";

const ResCategory = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* {console.log(data)} */}
      {/* Header */}

      <div
        onClick={() => setOpen(!open)}
        className="p-4 bg-gray-50  w-6/12 mx-auto my-4 cursor-pointer  "
      >
        <div className="flex justify-between">
          <span className="font-mono font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{open ? "⬆️" : "⬇️"}</span>
        </div>
        {open && <ItemList items={data.itemCards} />}
      </div>

      {/* Body */}
    </div>
  );
};
export default ResCategory;
