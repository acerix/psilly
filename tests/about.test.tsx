import { h } from 'preact'
import { ReactElement } from 'react'
import About from '../src/routes/about'
import { shallow } from 'enzyme'

describe('Test about page contents', () => {
  test('About header is as expected', () => {
    const context = shallow(<About /> as ReactElement)
    expect(context.find('h1').text()).toBe('About Psilly')
  })
})
