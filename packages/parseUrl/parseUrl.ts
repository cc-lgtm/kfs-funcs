function parseUrl(url: string) {
  const param = url.split('?')[1].split('&')
  const result: {
    [k: string]: string
  } = {}
  param.forEach(p => {
    const values = p.split('=')
    result[values[0]] = values[1]
  })
  return result
}

export default parseUrl
