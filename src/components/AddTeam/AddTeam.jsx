import React, { useState } from "react";

const AddTeam = ({ addTeam }) => {
  const [team, setTeam] = useState("");
  const [isFavourite, setIsFavourite] = useState(false);

  const onClick = () => {
    setIsFavourite((prevState) => !prevState)
    setTeam("");
  }

  return (
    <>
      <input
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        className="input"
        type="text"
      />
      <button onClick={() => addTeam(team, isFavourite)}>
        ДОБАВИТЬ КОМАНДУ
      </button>
      <input
        type="checkbox"
        onClick={onClick}
        checked={isFavourite}
      />
      Моя команда
    </>
  );
};

export default AddTeam;
