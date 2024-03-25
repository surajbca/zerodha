import React from "react";
import { faker } from "@faker-js/faker";
import "./App.css";
import Graph1 from "./Components/Graph1";
import Graph2 from "./Components/Graph2";
import Graph3 from "./Components/Graph3";
import Graph4 from "./Components/Graph4";

function App() {
  const data1 = Array.from({ length: 6 }, () =>
    faker.datatype.number({ min: 1, max: 100 })
  );
  const data2 = Array.from({ length: 6 }, () =>
    faker.datatype.number({ min: 1, max: 100 })
  );
  const data3 = Array.from({ length: 3 }, () =>
    faker.datatype.number({ min: 1, max: 100 })
  );
  const data4 = Array.from({ length: 4 }, () =>
    faker.datatype.number({ min: 1, max: 100 })
  );
  return (
    <div className="container ">
      <div className="chart-container ">
        <div className="Graph">
          <Graph1 data={data1} />
        </div>
        <div className="Graph">
          <Graph2 data={data2} />
        </div>
        <div className="Graph">
          <Graph3 data={data3} />
        </div>
        <div className="Graph">
          <Graph4 data={data4} />
        </div>
      </div>
    </div>
  );
}

export default App;
