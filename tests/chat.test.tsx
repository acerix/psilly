import { h } from 'preact'
import Chat from '../src/routes/chat'
import { shallow } from 'enzyme'

describe('Test chat page contents', () => {
  test('Chat header is as expected', () => {
    const context = shallow(<Chat />)
    expect(context).toBeTruthy()
  })
})
