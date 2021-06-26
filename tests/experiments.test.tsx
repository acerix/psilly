import { h } from 'preact'
import Experiments from '../src/routes/experiments'
import { shallow } from 'enzyme'

describe('Test experiments page contents', () => {
  test('Experiments header is as expected', () => {
    const context = shallow(<Experiments />)
    expect(context.find('h1').text()).toBe('Experiments')
  })
})
