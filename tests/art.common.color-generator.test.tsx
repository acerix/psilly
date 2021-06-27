import ColorGenerator from '../src/routes/art/common/color-generator'

describe('Test color generator', () => {

  test('ColorGenerator is a function', () => {
    expect(typeof ColorGenerator).toBe('function')
  })

  test('ColorGenerator instance is an object', () => {
    const colorGenerator = ColorGenerator()
    expect(typeof colorGenerator).toBe('object')
  })

  test('ColorGenerator initial colour is greyest', () => {
    const colorGenerator = ColorGenerator()
    const initialColor = colorGenerator.next().value as string
    expect(initialColor).toBe('rgb(128,128,128)')
  })

})
