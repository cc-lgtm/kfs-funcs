function strcut(str: string, flag: string | number) {
  return typeof flag === 'number' ? str.substr(0, flag) : str.split(flag)
}

export default strcut
