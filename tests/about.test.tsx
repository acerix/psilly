import { h } from 'preact'
import About from '../src/routes/about'
import { shallow } from 'enzyme'

describe('Test about page contents', () => {
  test('About header is as expected', () => {
    const context = shallow(<About />)
    expect(context.find('h1').text()).toBe('About Psilly')
  })
})
