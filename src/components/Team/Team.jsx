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

    temp.forEach((el, index, arr) => {
      if (el.name == resultObj.name) {
        arr[index] = resultObj;
      }
    });

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    calculate(temp);
    localStorage.setItem("info", JSON.stringify(temp));
  };

  const handleDelete = (e) => {
    e.preventDefault();
  
    // Filter out the team from the info array
    const updatedInfo = temp.filter((team) => team.name !== resultObj.name);
  
    // Update the temp array with the new filtered data
    setInfo(updatedInfo);
  
    // Optionally, save the updated info to localStorage as well
    localStorage.setItem("info", JSON.stringify(updatedInfo));
  
    console.log("Updated info after delete:", updatedInfo);
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
        <button onClick={(e) => handleDelete(e)}>УДАЛИТЬ</button>
      </div>
    </div>
  );
};

export default Team;
