import { h } from 'preact'
import { ReactElement } from 'react'
import Header from '../src/components/header'
import { shallow } from 'enzyme'

describe('Test header contents', () => {
  test('Header brand is psilly', () => {
    const context = shallow(<Header /> as ReactElement)
    expect(context.find('.navbar-brand').text()).toBe('Psilly.com 🍄')
  })
})
