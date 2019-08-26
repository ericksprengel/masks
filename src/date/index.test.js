import {
  isValid,
  format,
  mask,
  unmask,
} from '.'

describe('checking date validation', () => {
  test('should 1988-12-02 be a valid date', () => {
    expect(isValid('1988-12-02')).toBe(true)
  })
  test('should 1988-12-0 be an invalid date', () => {
    expect(isValid('1988-12-0')).toBe(false)
  })
  test('should 1988 be an invalid date', () => {
    expect(isValid('1988')).toBe(false)
  })
  test('should 02/12/1988 be an invalid date', () => {
    expect(isValid('02/12/1988')).toBe(false)
  })
})


describe('checking date formater', () => {
  test('should return a formatted date for a valid date', () => {
    expect(format('1988-12-02')).toBe(
      '02/12/1988',
    )
  })
  test('should return null for an invalid date', () => {
    expect(format('1988-12-0')).toBe(null)
  })
})


describe('checking date mask', () => {
  test('should format a valid date', () => {
    expect(mask('1988-12-02')).toBe(
      '02/12/1988',
    )
  })
  test('should format a semi date', () => {
    expect(mask('')).toBe('')
    expect(mask('--1')).toBe('1')
    expect(mask('--11')).toBe('11')
    expect(mask('-2-11')).toBe('11/2')
    expect(mask('-22-11')).toBe('11/22')
    expect(mask('3-22-11')).toBe('11/22/3')
    expect(mask('33-22-11')).toBe('11/22/33')
    expect(mask('333-22-11')).toBe('11/22/333')
    expect(mask('3333-22-11')).toBe('11/22/3333')
  })
})


describe('checking date unmask', () => {
  test('should unmask a formatted date', () => {
    expect(unmask('02/12/1988')).toBe(
      '1988-12-02',
    )
  })
  test('should unmask a semi formated date', () => {
    expect(unmask('')).toBe('')
    expect(unmask('1')).toBe('--1')
    expect(unmask('11')).toBe('--11')
    expect(unmask('11/2')).toBe('-2-11')
    expect(unmask('11/22')).toBe('-22-11')
    expect(unmask('11/22/3')).toBe('3-22-11')
    expect(unmask('11/22/33')).toBe('33-22-11')
    expect(unmask('11/22/333')).toBe('333-22-11')
    expect(unmask('11/22/3333')).toBe('3333-22-11')
  })
})
