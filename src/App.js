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
        style={{ width: "100px", height: "50px", fontSize: "14px" }}
      >
        УДАЛИТЬ ИСТОРИЮ
      </button>
    </div>
  );
}

export default App;
