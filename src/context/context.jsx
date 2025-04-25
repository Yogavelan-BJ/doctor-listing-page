import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [sortedData, setSortedData] = useState();
  const [specialities, setSpecialities] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json"
        );
        const json = await res.json();
        setData(json);
        const specialtiesSet = new Set();

        json.forEach((doc) => {
          doc.specialities.forEach((spec) => {
            const normalized = spec.name
              .toLowerCase()
              .replace(/ and |&/gi, ",") // Replace " and ", "&" with commas
              .split(",")
              .map((s) => s.trim());

            normalized.forEach((item) => {
              if (item)
                specialtiesSet.add(
                  item.charAt(0).toUpperCase() + item.slice(1)
                );
            });
          });
        });

        setSpecialities(Array.from(specialtiesSet));
      } catch (err) {
        console.error("Error Fetching Data From Provided API Endpoint:", err);
      }
    };

    fetchData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        data,
        filteredData,
        sortedData,
        specialities,
        setData,
        setFilteredData,
        setSortedData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
