import {
  isValid,
  format,
  mask,
  unmask,
} from '.'

describe('checking CPF validation', () => {
  test('should 33307382861 be a valid CPF', () => {
    expect(isValid('33307382861')).toBe(true)
  })
  test('should 33307382862 be an invalid CPF', () => {
    expect(isValid('33307382862')).toBe(false)
  })
  test('should 33307 be an invalid CPF', () => {
    expect(isValid('33307')).toBe(false)
  })
  test('should 333.073.828-61 be an invalid CPF', () => {
    expect(isValid('333.073.828-61')).toBe(false)
  })
})


describe('checking CPF formater', () => {
  test('should return a formatted CPF for a valid CPF', () => {
    expect(format('33307382861')).toBe(
      '333.073.828-61',
    )
  })
  test('should return null for an invalid CPF', () => {
    expect(format('11122233344')).toBe(null)
  })
})


describe('checking CPF mask', () => {
  test('should format a valid CPF', () => {
    expect(mask('33307382861')).toBe(
      '333.073.828-61',
    )
  })
  test('should format a semi CPF', () => {
    expect(mask('')).toBe('')
    expect(mask('1')).toBe('1')
    expect(mask('111')).toBe('111')
    expect(mask('1112')).toBe('111.2')
    expect(mask('111222')).toBe('111.222')
    expect(mask('11122233')).toBe('111.222.33')
    expect(mask('111222333')).toBe('111.222.333')
    expect(mask('1112223334')).toBe('111.222.333-4')
  })
})


describe('checking CPF unmask', () => {
  test('should unmask a formatted CPF', () => {
    expect(unmask('333.073.828-61')).toBe(
      '33307382861',
    )
  })
  test('should unmask a semi formated CPF', () => {
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
