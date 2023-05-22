//understanding Effect hook

import { useEffect, useRef } from "react";

function UseEffect() {
  const refInput = useRef<HTMLInputElement>(null);

  //this piece of code will be executed after rendered the component
  //this way makes the component as pure
  //we can have multiple useEffect as we need into this component
  //and react will execute in order after each render
  useEffect(() => {
    //if (refInput.current) refInput.current.focus();
  });

  //executed after each render
  useEffect(() => {
    document.title = "Dany title";
  });

  return (
    <div>
      <h2>UseEffect</h2>
      <input ref={refInput} type="text" className="form-control" />
    </div>
  );
}

export default UseEffect;
