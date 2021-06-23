import { h } from 'preact'
import Art from '../src/routes/art'
import { shallow } from 'enzyme'

describe('Test art page contents', () => {
  test('Art header is as expected', () => {
    const context = shallow(<Art />)
    expect(context.find('h1').text()).toBe('Psilly Digital Art Exhibition')
  })
})
