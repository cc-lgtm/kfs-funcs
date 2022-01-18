type SrouceMap = {
  [k: string]: any
} & {
  [k: number]: any
}
type Target = Array<keyof SrouceMap>

function pick(srouceMap: SrouceMap, target: Target) {
  const result: SrouceMap= {}
  target.forEach(item => {
    result[item] = srouceMap[item]
  })
  return result
}

export default pick
