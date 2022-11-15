const nowStr = (now = new Date()) =>
  `${now.getHours()}:${now.getMinutes()}:${String(now.getSeconds()).padStart(
    2,
    "0"
  )}`

export { nowStr }
