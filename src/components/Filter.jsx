import React from "react";
import { nanoid } from "nanoid/non-secure";

const Filter = ({ filter, onChange }) => {
  const searchId = nanoid();
  return (
    <>
      <label htmlFor={searchId}>Find contact</label>
      <input
        type="text"
        id={searchId}
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

export default Filter;
