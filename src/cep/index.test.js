import {
  isValid,
  format,
  mask,
  unmask,
} from '.'

describe('checking CEP validation', () => {
  test('should 04279080 be a valid CEP', () => {
    expect(isValid('04279080')).toBe(true)
  })
  test('should 1234567 be an invalid CEP', () => {
    expect(isValid('1234567')).toBe(false)
  })
  test('should empty string be an invalid CEP', () => {
    expect(isValid('')).toBe(false)
  })
  test('should 04279-080 be an invalid CEP', () => {
    expect(isValid('04279-080')).toBe(false)
  })
})


describe('checking CEP formater', () => {
  test('should return a formatted CEP for a valid CEP', () => {
    expect(format('04279080')).toBe(
      '04279-080',
    )
  })
  test('should return null for an invalid CEP', () => {
    expect(format('1234')).toBe(null)
  })
})


describe('checking CEP mask', () => {
  test('should format a valid CEP', () => {
    expect(mask('04279080')).toBe(
      '04279-080',
    )
  })
  test('should format a semi CEP', () => {
    expect(mask('')).toBe('')
    expect(mask('1')).toBe('1')
    expect(mask('12')).toBe('12')
    expect(mask('123')).toBe('123')
    expect(mask('1234')).toBe('1234')
    expect(mask('12345')).toBe('12345')
    expect(mask('123456')).toBe('12345-6')
    expect(mask('1234567')).toBe('12345-67')
    expect(mask('12345678')).toBe('12345-678')
  })
})


describe('checking CEP unmask', () => {
  test('should unmask a formatted CEP', () => {
    expect(unmask('04279-080')).toBe(
      '04279080',
    )
  })
  test('should unmask a semi formated CEP', () => {
    expect(unmask('')).toBe('')
    expect(unmask('1')).toBe('1')
    expect(unmask('111')).toBe('111')
    expect(unmask('111.2')).toBe('1112')
    expect(unmask('111.222')).toBe('111222')
    expect(unmask('111.222.33')).toBe('11122233')
    expect(unmask('111.222.333')).toBe('111222333')
    expect(unmask('111.222.333-4')).toBe('1112223334')
  })
})
