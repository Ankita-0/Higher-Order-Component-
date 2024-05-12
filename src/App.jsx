import { useState } from "react";

export function HigherOrderFunction(OriginalComponents) {
  function NewComponent(props) {
    const [fontSize, setFontSize] = useState(10);

    return (
      <>
      <OriginalComponents fontSize={fontSize} incrementCounter={() => { setFontSize((fontSize) => fontSize + 1) }} />
      <button onClick={()=>setFontSize(10)}>Reset font size</button>
      </>
    )
  }
  return NewComponent;
}

export default HigherOrderFunction;
