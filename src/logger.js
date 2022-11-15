import { nowStr } from "./time.js"

const log = (...strs) => console.log(nowStr(), ...strs)

export { log }
