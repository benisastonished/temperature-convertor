import { useState } from "react"
import "./styles.css"
import { ftoc, ctof } from "./temp-convertor.js"
import { log } from "./logger.js"

const DIRECTIONS = { FTOC: "FTOC", CTOF: "CTOF" }

export default function App() {
  const [result, setResult] = useState(null)
  const [direction, setDirection] = useState(DIRECTIONS.FTOC)

  log("Running App component...")

  const updateValue = ({ target: { value } }) => {
    const convertor = direction === DIRECTIONS.FTOC ? ftoc : ctof
    const str = isNaN(Number(value)) ? null : convertor(value).toFixed(2)
    log("updated")
    setResult(str)
  }

  const updateDirection = ({ target: { value } }) => {
    log("direction set", value)
    setDirection(value)
  }

  return (
    <div className="App">
      <h1>Temp Convertor</h1>
      <div className="controls">
        <input
          type="radio"
          name="direction"
          value="CTOF"
          onChange={updateDirection}
        />
        <label htmlFor="tof">Celcius to Farenheit</label>
        <input
          type="radio"
          name="direction"
          value="FTOC"
          onChange={updateDirection}
        />
        <label htmlFor="toc">Farenheit to Celcius</label>
        <input
          type="text"
          onChange={updateValue}
          placeholder={`\u00B0${direction === DIRECTIONS.CTOF ? "C" : "F"}`}
        />
      </div>
      <div className="result">
        {result
          ? `${result} \u00B0${direction === DIRECTIONS.CTOF ? "F" : "C"}`
          : "--"}
      </div>
    </div>
  )
}
