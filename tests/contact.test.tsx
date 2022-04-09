import { h } from 'preact'
import { ReactElement } from 'react'
import Contact from '../src/routes/contact'
import { shallow } from 'enzyme'

describe('Test contact page contents', () => {
  test('Contact header is as expected', () => {
    const context = shallow(<Contact /> as ReactElement)
    expect(context.find('h1').text()).toBe('Contact Psilly')
  })
})
