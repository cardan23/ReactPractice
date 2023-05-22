//understanding Effect hook with dependency

import { useEffect, useRef, useState } from "react";

//porps is a short way to declare it and get the value as parameter
function UseEffectDependency({ category }: { category: string }) {
  const refInput = useRef<HTMLInputElement>(null);

  const [product, setProduct] = useState<string[]>([]);

  //This is executed after every render
  //and this component will rendered with every change of state
  //this will cause an issue... infinite loop
  // useEffect(() => {
  //   console.log("fetching data from server...");
  //   setProduct(["Clothing", "HouseHold"]);
  // });

  //This is executed only once the first time the component is rendered and not dependency with any value
  //second parameter [] is for dependency values, no dependency values this time.
  // useEffect(() => {
  //   console.log("fetching data from server...");
  //   setProduct(["Clothing", "HouseHold"]);
  // }, []);

  //This is executed every time any of this dependency value(s) changes.
  useEffect(() => {
    console.log("fetching data from server...");
    setProduct(["Clothing", "HouseHold"]);
  }, [category]);

  return (
    <div>
      <h2>UseEffect Dependency</h2>
      <input ref={refInput} type="text" className="form-control" />
    </div>
  );
}

export default UseEffectDependency;
