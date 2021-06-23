import { h } from 'preact'
import Join from '../src/routes/join'
import { shallow } from 'enzyme'

describe('Test join page contents', () => {
  test('Join header is as expected', () => {
    const context = shallow(<Join />)
    expect(context.find('h1').text()).toBe('Become a Member')
  })
})
