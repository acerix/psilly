import { h } from 'preact'
import Polygons from '../src/routes/art/polygons'
import { shallow } from 'enzyme'

describe('Test polygons exhibit page contents', () => {
  test('Polygons exhibit canvas is as expected', () => {
    const context = shallow(<Polygons />)
    expect(context.find('#canvas').text()).toBe('⬡')
  })
})
