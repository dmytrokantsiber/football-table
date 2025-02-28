import React from "react";

const SaveData = ({ info }) => {
  return (
    <button
      onClick={(e) => {
        localStorage.setItem("info", JSON.stringify(info));
      }}
    >
      СОХРАНИТЬ ДАННЫЕ
    </button>
  );
};

export default SaveData;
