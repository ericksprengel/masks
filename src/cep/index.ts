// unmasked: 04279080
// masked: 04279-080

const isValid = (cep: string): boolean => {
  const regex: RegExp = /^(\d{8})$/
  return regex.test(cep)
}

const format = (value: string): string => {
  if (!isValid(value)) {
    return null
  }
  return value.replace(
    /^(\d{5})(\d{3})$/,
    '$1-$2'
  )
}

const mask = (value: string): string => {
  return value.replace(
    /^(\d{0,5})?(\d{0,3})?$/,
    (match, p1, p2) => {
      if (p2) {
        return `${p1}-${p2}`
      } else if(p1) {
        return `${p1}`
      }
      return ''
    }
  )
}

const unmask = (value: string): string => value.replace(/\D/g, '')


export {
  isValid,
  format,
  mask,
  unmask,
}
