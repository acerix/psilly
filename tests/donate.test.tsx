import { h } from 'preact'
import { ReactElement } from 'react'
import Donate from '../src/routes/donate'
import { shallow } from 'enzyme'

describe('Test donate page contents', () => {
  test('Donate header is as expected', () => {
    const context = shallow(<Donate /> as ReactElement)
    expect(context.find('h1').text()).toBe('Donate')
  })
})
