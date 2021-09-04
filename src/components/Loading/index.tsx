//Libs
import ClipLoader from "react-spinners/ClipLoader";

//React
import { useState } from "react";

export function Loading() {
  let [color, setColor] = useState("#81FF5C");
  return (
    <>
      <ClipLoader color={color} />
      <div>fetching characters</div>
    </>
  );
}
