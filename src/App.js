import React from "react";
import  ReactDOM  from "react-dom";
import Rectangle from "./rectange";

const App =() =>{
  return(
    <div>
      <Rectangle/>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)

export default App;
