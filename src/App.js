import "./App.css";
import Cars from "./api/cars.json";
import { useRef, useState } from "react";
import CarDetails from "./components/CarDetails";

export default function App() {
  let scrl = useRef(null);
  const [scrollx, setscrollx] = useState(0);
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollx(scrollx + shift);
  };
  const scrollcheck = () => {
    setscrollx(scrl.current.scrollLeft);
  };
  return (
    <>
      <div className="app" ref={scrl} onScroll={scrollcheck}>
        {Cars.map((item) => (
          <CarDetails
            key={item.id}
            type={item.bodyType}
            name={item.modelName}
            modelType={item.modelType}
            carImage={item.imageUrl}
          />
        ))}
      </div>
      <div className="app-btn_container">
        <button className="left-btn button" onClick={() => slide(-400)}>
          <img src="./images/chevron-circled.svg" alt="Right Button" />
        </button>
        <button className="right-btn button" onClick={() => slide(+400)}>
          <img src="./images/chevron-circled.svg" alt="Left Button" />
        </button>
      </div>
    </>
  );
}
