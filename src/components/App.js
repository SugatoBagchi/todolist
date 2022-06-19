import React, { useState } from "react";
import Clock from "./Clock";
import Todos from "./Todos";

const App = () => {
  // ya data ha todo ka jo ik object ha array ka andr isma muja thoda confusion ha ka isko asai likhta ha kya check kr lena use state ka andr objects array kesa likhta ha baki tu smjh gya hoga ka objects ka array kun likha
  // const [todo, setTodo] = useState([{ title: "", todo: "" }]);
  // const [data, setData] = useState([]);
  return (
    // <div className="App">
    //   <Todos todo={todo} setTodo={setTodo} data={data} setData={setData} />
    //   <DisplayTodos todo={todo} setTodo={setTodo} data = {data} setData={setData}/>
    // </div>
    <Todos />
  );
};

export default App;
