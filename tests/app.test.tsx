import { h } from 'preact'
import App from '../src/components/app'
import { shallow } from 'enzyme'

describe('App component contents', () => {
  test('App contains one <main> element', () => {
    const context = shallow(<App />)
    expect(context.find('main').length).toBe(1)
  })
})
