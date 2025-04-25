import React from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import { useAppContext } from "../context/context";
import DoctorCard from "../components/DoctorCard";

function Home() {
  const { data, filteredData } = useAppContext();
  return (
    <div className="w-full h-full bg-gray-200 flex flex-col items-center">
      <Search />
      <div className="w-full h-screen bg-gray flex">
        <div className="w-1/3 h-full p-2 flex flex-col items-center justify-center">
          <Sort />
          <Filter />
        </div>
        <div className="w-2/3 h-full flex-col items-center justify-center overflow-scroll">
          {!filteredData
            ? data?.map((doc, index) => (
                <DoctorCard doctor={doc} index={index} />
              ))
            : filteredData?.map((doc, index) => (
                <DoctorCard doctor={doc} index={index} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
