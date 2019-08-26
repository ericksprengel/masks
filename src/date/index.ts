// unmasked: 1988-12-02
// masked: 02/12/1988

const isValid = (date: string): boolean => {
  const regex: RegExp = /^(\d{4})-(\d{2})-(\d{2})$/
  return regex.test(date)
}

const format = (value: string): string => {
  if (!isValid(value)) {
    return null
  }
  return value.replace(
    /^(\d{4})-(\d{2})-(\d{2})$/,
    '$3/$2/$1'
  )
}

const mask = (value: string): string => {
  return value.replace(
    /^(\d{0,4})?-(\d{0,2})?-(\d{0,2})?$/,
    (match, p1, p2, p3) => {
      if(p1) {
        return `${p3}/${p2}/${p1}`
      } else if(p2) {
        return `${p3}/${p2}`
      } else if(p3) {
        return `${p3}`
      }
      return ''
    }
  )
}

const unmask = (value: string): string =>{
  return value.replace(
    /^(\d{0,2})?\/?(\d{0,2})?\/?(\d{0,4})?$/,
    (match, p1, p2, p3) => {
      if(p3) {
        return `${p3}-${p2}-${p1}`
      } else if(p2) {
        return `-${p2}-${p1}`
      } else if(p1) {
        return `--${p1}`
      }
      return ''
    }
  )
}


export {
  isValid,
  format,
  mask,
  unmask,
}
