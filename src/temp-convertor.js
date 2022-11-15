const ftoc = (f) => {
  return (f - 32) / 1.8
}

const ctof = (c) => {
  return c * 1.8 + 32
}

export { ftoc, ctof }
