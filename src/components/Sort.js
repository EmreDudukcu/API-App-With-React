import { useState, useEffect } from "react";

function Sort({ users, setFiltered, filterText }) {
  //A state was defined to hold the value from the select option.
  const [sortStyle, setSortStyle] = useState();

  //A function that sets the value from the select option.
  const handleStyleChange = (event) => {
    setSortStyle(event.target.value);
  };

  //Filters the data when the specified parameters change.
  useEffect(() => {
    if (users) {
      const filteredCopy = [...users];
      if (sortStyle === "age, increasing") {
        filteredCopy.sort((a, b) => a.age - b.age);
      } else if (sortStyle === "age, decreasing") {
        filteredCopy.sort((a, b) => b.age - a.age);
      } else if (sortStyle === "name, start") {
        filteredCopy.sort((a, b) => a.firstName.localeCompare(b.firstName));
      } else if (sortStyle === "name, end") {
        filteredCopy.sort((a, b) => b.firstName.localeCompare(a.firstName));
      }
      setFiltered(
        filteredCopy.filter((item) => {
          return Object.keys(item).some((key) => {
            return (
              (key === "firstName" &&
                item.firstName
                  .toString()
                  .toLowerCase()
                  .includes(filterText.toLowerCase())) ||
              (key === "lastName" &&
                item[key]
                  .toString()
                  .toLowerCase()
                  .includes(filterText.toLowerCase())) ||
              (key === "phoneNumber" &&
                item[key]
                  .toString()
                  .toLowerCase()
                  .includes(filterText.toLowerCase()))
            );
          });
        })
      );
    }
  }, [sortStyle, users, filterText, setFiltered]);

  return (
    <div>
      <label htmlFor="sort-style">Sort by: </label>
      <select
        id="sort-style"
        name="sort-style"
        value={sortStyle}
        onChange={handleStyleChange} //Sets the selected option.
      >
        <option value="age, increasing">age, increasing</option>
        <option value="age, decreasing">age, decreasing</option>
        <option value="name, start">name, start</option>
        <option value="name, end">name, end</option>
      </select>
    </div>
  );
}

export default Sort;
