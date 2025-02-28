import MainTable from "./components/MainTable/MainTable";

function App() {
  return (
    <div className="wrapper">
      <MainTable></MainTable>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          localStorage.removeItem("info");
          window.location.reload();
        }}
        style={{ width: "1000px", height: "500px", fontSize: "50px" }}
      >
        УДАЛИТЬ ИСТОРИЮ
      </button>
    </div>
  );
}

export default App;
