import { h } from 'preact'
import High from '../src/routes/high'
import { shallow } from 'enzyme'

describe('Test high page contents', () => {
  test('High header is as expected', () => {
    const context = shallow(<High />)
    expect(context.find('h1').text()).toBe('Your Highness')
  })
})
