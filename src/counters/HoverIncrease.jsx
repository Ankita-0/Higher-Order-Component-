import { HigherOrderFunction } from "../App.jsx";

function HoverIncrease({ fontSize, incrementCounter }) {
    return <>
        <p id="container" style={{ fontSize }}>Font size: {fontSize}</p>
        <button onMouseOver={incrementCounter}>Hover to increase Font Size</button>
    </>
}

export default HigherOrderFunction(HoverIncrease);