import { h } from 'preact'
import Contact from '../src/routes/contact'
import { shallow } from 'enzyme'

describe('Test contact page contents', () => {
  test('Contact header is as expected', () => {
    const context = shallow(<Contact />)
    expect(context.find('h1').text()).toBe('Contact Psilly')
  })
})
