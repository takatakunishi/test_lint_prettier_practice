import { render } from '@testing-library/react'
import Text from 'components/atoms/Text'

describe('Textコンポーネントテスト', () => {
  test('日本語文字が表示されるか', () => {
    const testText = '日本語文。サンプルですゑゐ'
    basicCheckTextCode(testText)
  })
  test('英語語文字が表示されるか', () => {
    const testText = 'Hello. \n\nThis test is not difficult, but important.'
    basicCheckTextCode(testText)
  })
})

const basicCheckTextCode = (testText: string) => {
  const { container, asFragment } = render(<Text text={testText} />)
  expect(asFragment()).toMatchSnapshot()
  const innerHTMLText = container.innerHTML
  expect(innerHTMLText).toMatch(testText)
}
