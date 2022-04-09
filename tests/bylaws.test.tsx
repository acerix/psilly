import { h } from 'preact'
import { ReactElement } from 'react'
import Bylaws from '../src/routes/bylaws'
import { shallow } from 'enzyme'

describe('Test by-laws page contents', () => {
  test('By-laws header is as expected', () => {
    const context = shallow(<Bylaws /> as ReactElement)
    expect(context.find('h1').text()).toBe('Psilly By-laws')
  })
})
