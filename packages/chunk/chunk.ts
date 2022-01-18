function chunk(arr: Array<any>, size: number) {
  return Array.from({
    length: Math.ceil(arr.length / size)
  },
    (_, i) => arr.slice(i * size, i * size + size)
  )
}

export default chunk
