import { h } from 'preact'
import { ReactElement } from 'react'
import Art from '../src/routes/art'
import { shallow } from 'enzyme'

describe('Test art page contents', () => {
  test('Art header is as expected', () => {
    const context = shallow(<Art /> as ReactElement)
    expect(context.find('h1').text()).toBe('Web Art')
  })
})
