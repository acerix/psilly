import { h } from 'preact'
import { ReactElement } from 'react'
import App from '../src/components/app'
import { shallow } from 'enzyme'

describe('App component contents', () => {
  test('App contains one <main> element', () => {
    const context = shallow(<App /> as ReactElement)
    expect(context.find('main').length).toBe(1)
  })
})
