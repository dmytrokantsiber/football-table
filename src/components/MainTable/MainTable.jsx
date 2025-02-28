import React, { useEffect, useState } from "react";
import { sortA, sortB, sortC } from "../../sort";
import AddTeam from "../AddTeam/AddTeam";
import SaveData from "../SaveData/SaveData";
import Team from "../Team/Team";

const MainTable = () => {
  const createEmptyTeam = (name, isFavourite) => {
    return {
      order: info.length,
      name: name,
      matches: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      scored: 0,
      missed: 0,
      difference: 0,
      count: 0,
      isFavourite,
    };
  };
  const a = localStorage.getItem("info");
  const addTeam = (value, isFavourite) => {
    setInfo((prevState) => [...prevState, createEmptyTeam(value, isFavourite)]);
  };
  const [info, setInfo] = useState(
    JSON.parse(a) || [
      {
        order: "#",
        name: "Клуб",
        matches: "И",
        wins: "В",
        draws: "Н",
        loses: "П",
        scored: "ЗМ",
        missed: "ПМ",
        difference: "РМ",
        count: "О",
        isFavourite: false,
      },
    ]
  );

  const calculate = (temp) => {
    temp.forEach((e, index) => {
      if (index == 0) {
        return;
      }
      e.count = Number(e.wins) * 3 + Number(e.draws);
      e.matches = Number(e.wins) + Number(e.draws) + Number(e.loses);
      e.difference = Number(e.scored) - Number(e.missed);
    });

    temp = temp.sort(sortA);

    temp.forEach((e, index) => {
      if (index == 0) {
        return;
      }
      e.order = index;
    });
    setInfo(temp);
    window.location.reload();
  };

  useEffect(()=> {
    localStorage.setItem("info", JSON.stringify(info))
  },[info])

  return (
    <>
      {info.map((team, index) => {
        return (
          <Team
            key={index}
            {...team}
            setInfo={setInfo}
            info={info}
            calculate={calculate}
          ></Team>
        );
      })}
      <div>
        <br></br>
        <SaveData info={info} />
      </div>
      <AddTeam addTeam={addTeam} />
    </>
  );
};

export default MainTable;
