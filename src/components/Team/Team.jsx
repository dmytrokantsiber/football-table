import React from "react";
import "../../App.css";

const Team = ({
  count,
  draws,
  loses,
  matches,
  missed,
  name,
  order,
  scored,
  difference,
  wins,
  isFavourite,
  setInfo,
  info,
  calculate,
}) => {
  let resultObj = {
    count,
    draws,
    loses,
    matches,
    missed,
    name,
    order,
    scored,
    difference,
    wins,
    isFavourite,
  };
  const temp = info;
  const handleChange = (e) => {
    resultObj = { ...resultObj, [e.target.name]: e.target.value };
    console.log(resultObj);
    temp.forEach((el, index, arr) => {
      if (el.name == resultObj.name) {
        arr[index] = resultObj;
      }
    });
    console.log(temp);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    calculate(temp);
    localStorage.setItem("info", JSON.stringify(temp));
  };
  if (isFavourite) {
    return (
      <div className="a">
        <div className="team-wrapper-fav">
          <div className="team-stats">{order}</div>
          <div className="team-stats_name">{name}</div>
          <div className="team-stats">{matches}</div>
          <div className="team-stats">
            <input
              className="input-2"
              onChange={handleChange}
              name="wins"
              placeholder={wins}
            />
          </div>
          <div className="team-stats">
            <input
              className="input-2"
              onChange={handleChange}
              name="draws"
              placeholder={draws}
            />
          </div>
          <div className="team-stats">
            <input
              className="input-2"
              onChange={handleChange}
              name="loses"
              placeholder={loses}
            />
          </div>
          <div className="team-stats">
            <input
              className="input-2"
              onChange={handleChange}
              name="scored"
              placeholder={scored}
            />
          </div>
          <div className="team-stats">
            <input
              className="input-2"
              onChange={handleChange}
              name="missed"
              placeholder={missed}
            />
          </div>
          <div className="team-stats">{difference}</div>
          <div className="team-stats">{count}</div>
          <button onClick={handleSubmit}>СОХРАНИТЬ</button>
        </div>
      </div>
    );
  }
  return (
    <div className="a">
      <div className="team-wrapper">
        <div className="team-stats">{order}</div>
        <div className="team-stats_name">{name}</div>
        <div className="team-stats">{matches}</div>
        <div className="team-stats">
          <input
            className="input-2"
            onChange={handleChange}
            name="wins"
            placeholder={wins}
          />
        </div>
        <div className="team-stats">
          <input
            className="input-2"
            onChange={handleChange}
            name="draws"
            placeholder={draws}
          />
        </div>
        <div className="team-stats">
          <input
            className="input-2"
            onChange={handleChange}
            name="loses"
            placeholder={loses}
          />
        </div>
        <div className="team-stats">
          <input
            className="input-2"
            onChange={handleChange}
            name="scored"
            placeholder={scored}
          />
        </div>
        <div className="team-stats">
          <input
            className="input-2"
            onChange={handleChange}
            name="missed"
            placeholder={missed}
          />
        </div>
        <div className="team-stats">{difference}</div>
        <div className="team-stats">{count}</div>
        <button onClick={(e) => handleSubmit(e)}>СОХРАНИТЬ</button>
      </div>
    </div>
  );
};

export default Team;
