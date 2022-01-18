function objToArr(srouce: {
  [k: string]: any
}) {
  return Object.keys(srouce).map(k => {
    return [k, srouce[k]]
  })
}

export default objToArr
