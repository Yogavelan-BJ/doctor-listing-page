import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/context";

const Sort = () => {
  const [selectedSort, setSelectedSort] = useState("");
  const { data, setFilteredData, filteredData, setData } = useAppContext();
  useEffect(() => {
    if (selectedSort === "price") {
      console.log("Sorting by Price: Low to High");
      const d = data?.sort((a, b) => {
        const feeA = parseInt(a.fees.replace(/[^\d]/g, ""), 10);
        const feeB = parseInt(b.fees.replace(/[^\d]/g, ""), 10);
        return feeA - feeB;
      });
      setFilteredData(d);
    } else if (selectedSort === "experience") {
      console.log("Sorting by Most Experience first");
    }
  }, [selectedSort]);

  return (
    <div className="p-4 bg-white rounded-lg shadow mb-4">
      <h3 className="text-lg font-semibold mb-2">Sort by</h3>
      <div className="flex flex-col space-y-2">
        <label>
          <input
            type="radio"
            value="price"
            name="sort"
            checked={selectedSort === "price"}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="mr-2"
          />
          Price: Low–High
        </label>
        <label>
          <input
            type="radio"
            value="experience"
            name="sort"
            checked={selectedSort === "experience"}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="mr-2"
          />
          Experience – Most Experience first
        </label>
      </div>
    </div>
  );
};

export default Sort;
