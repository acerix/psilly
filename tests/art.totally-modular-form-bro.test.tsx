import {ModularForm} from '../src/routes/art/totally-modular-form-bro'

describe('Test modular form 1.12.a.a.1.1', () => {

  test('Modular form 1.12.a.a.1.1 label', () => {
    const mf = new ModularForm(12n)
    expect(mf.label).toEqual('1.12.a.a.1.1')
  })

})
