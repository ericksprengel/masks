// unmasked: 33307382861
// masked: 333.073.828-61

const isValid = (cpf: string): boolean => {
  const regex: RegExp = /^(\d{11})$/
  if (!regex.test(cpf)) {
    return false
  }
  const digits: number[] = cpf.split('').map(digit => +digit)
  const sum: number = digits.reduce((total: number, d: number) => total + d)
  return sum === 44
}

const format = (value: string): string => {
  if (!isValid(value)) {
    return null
  }
  return value.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    '$1.$2.$3-$4'
  )
}

const mask = (value: string): string => {
  return value.replace(
    /^(\d{0,3})?(\d{0,3})?(\d{0,3})?(\d{0,2})?$/,
    (match, p1, p2, p3, p4) => {
      if (p4) {
        return `${p1}.${p2}.${p3}-${p4}`
      } else if(p3) {
        return `${p1}.${p2}.${p3}`
      } else if(p2) {
        return `${p1}.${p2}`
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
