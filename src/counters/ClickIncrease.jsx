import { HigherOrderFunction } from "../App.jsx";

function ClickIncrease({ fontSize, incrementCounter }) {
    return <>
        <p id="container" style={{ fontSize }}>Font size: {fontSize}</p>
        <button onClick={incrementCounter}>Click to increase Font Size</button>
    </>
}

export default HigherOrderFunction(ClickIncrease);