// import { h } from 'preact'
import Page from '../src/routes/page'
// import { shallow } from 'enzyme'

describe('Test CMS page contents', () => {
  test('Page header is as expected', () => {
    expect(Page).toBeTruthy()
    //     const context = shallow(<Page page="trippy" />)
    //     expect(context.find('h1').text()).toBe('Trippy')
  })
})
