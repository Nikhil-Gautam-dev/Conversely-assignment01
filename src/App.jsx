import "./App.css";

function App() {
  const clickHandler = (element) => {
    const boxNo = element.dataset.boxNo;

    if (boxNo && boxNo == "9") {
      // change color to orange
      element.style.backgroundColor = "orange";

      const boxElements = document.querySelectorAll(".box");

      Array.from(boxElements).map((box) => {
        if (box.style.backgroundColor == "green") {
          box.style.backgroundColor = "orange";
        }
      });
    } else if (boxNo) {
      element.style.backgroundColor = "green";
    }
  };

  return (
    <>
      <div className="main">
        <div
          className="container"
          onClick={(e) => {
            clickHandler(e.target);
          }}
        >
          <div className="box" data-box-no="1"></div>
          <div className="box" data-box-no="2"></div>
          <div className="box" data-box-no="3"></div>
          <div className="box" data-box-no="4"></div>
          <div className="box" data-box-no="5"></div>
          <div className="box" data-box-no="6"></div>
          <div className="box" data-box-no="7"></div>
          <div className="box" data-box-no="8"></div>
          <div className="box" data-box-no="9"></div>
        </div>
      </div>
    </>
  );
}

export default App;
