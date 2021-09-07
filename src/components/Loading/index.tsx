//Libs
import ClipLoader from "react-spinners/ClipLoader";

//React
import { useState } from "react";

//Styles
import { LoadingContainer } from "./styles";

//Helpers
import { getRandomColor } from "../../helpers/functions";

export function Loading() {
  let [color] = useState(getRandomColor());
  return (
    <LoadingContainer>
      <ClipLoader color={color} size={100} />
      <span>Loading...</span>
    </LoadingContainer>
  );
}
