import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/context";

const Filter = () => {
  const { data, setFilteredData, specialities } = useAppContext();
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);
  const [selectedMode, setSelectedMode] = useState("All");

  const handleSpecialityChange = (value) => {
    setSelectedSpecialities((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  //   const specialities = ["Dentist"];
  const handleClearAll = () => {
    setSelectedSpecialities([]);
    setSelectedMode("All");
  };

  useEffect(() => {
    console.log("Filtering by:", { selectedSpecialities, selectedMode });
    setFilteredData(
      data?.filter((doc) =>
        doc.specialities.some((spec) => {
          // Normalize the specialty string
          const normalized = spec.name;
          let f = true;
          if (selectedMode == "Video Consultation") {
            f = doc.video_consult;
          }
          return normalized.includes(selectedSpecialities) && f;
        })
      )
    );
  }, [selectedSpecialities, selectedMode]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button onClick={handleClearAll} className="text-blue-600 text-sm">
          Clear All
        </button>
      </div>

      <div className="mb-4">
        <h4 className="font-medium mb-2">Specialities</h4>
        <div className="space-y-1 max-h-40 overflow-y-auto">
          {specialities?.map((item) => (
            <label key={item} className="block">
              <input
                type="checkbox"
                checked={selectedSpecialities.includes(item)}
                onChange={() => handleSpecialityChange(item)}
                className="mr-2"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Mode of consultation</h4>
        <div className="space-y-1">
          {["Video Consultation", "In-clinic Consultation", "All"].map(
            (mode) => (
              <label key={mode} className="block">
                <input
                  type="radio"
                  name="mode"
                  value={mode}
                  checked={selectedMode === mode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                  className="mr-2"
                />
                {mode}
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
