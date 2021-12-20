import React from "react";

const SearchBar = ({ setSearch }) => {
  const handleInputChange = (input) => {
    setSearch(input);
  };

  return (
    <div style={{ width: "34rem" }}>
      <h3 style={{ marginBottom: "5px", marginTop: 0 }}>Search</h3>
      <input
        style={{ width: "100%", height: 25 }}
        type="text"
        placeholder="You can search by drug name or by disease"
        onChange={(event) => handleInputChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
