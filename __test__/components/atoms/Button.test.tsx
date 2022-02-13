import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button, { ButtonPropsType } from '../../../src/components/atoms/Button'

describe("button test", () => {
    test("click check test", () => {
        let tmpClickCount = 0
        let tmpHoverCount = 0
        const buttonLabel = "Button ラベル"
        const mockClickFunc = jest.fn(() => {
            tmpClickCount++
        })
        const mockHoverFunc = jest.fn(() => {
            tmpHoverCount++
        })
        const buttonProps: ButtonPropsType = {
            label: buttonLabel,
            onClickFunc: () => mockClickFunc(),
            onMouseOverFunc: () => mockHoverFunc()
        }
        const component = render(<Button {...buttonProps} />)
        const button = component.getByText(buttonLabel)
        userEvent.click(button, undefined, { skipHover: true })
        expect(mockHoverFunc.mock.calls).toHaveLength(1) // The first time user clicks, the onFocus action will be called.
        expect(mockClickFunc.mock.calls).toHaveLength(1)
        expect(tmpClickCount).toBe(1)
        expect(tmpHoverCount).toBe(1)
    })
    test("hover test", () => {
        let tmpClickCount = 0
        let tmpHoverCount = 0
        const buttonLabel = "Button ラベル"
        const mockClickFunc = jest.fn(() => tmpClickCount++)
        const mockHoverFunc = jest.fn(() => tmpHoverCount++)
        const buttonProps: ButtonPropsType = {
            label: buttonLabel,
            onClickFunc: () => mockClickFunc(),
            onMouseOverFunc: () => mockHoverFunc()
        }
        const component = render(<Button {...buttonProps} />)
        const button = component.getByText(buttonLabel)
        userEvent.hover(button)
        userEvent.unhover(button)
        expect(mockHoverFunc.mock.calls).toHaveLength(1)
        expect(mockClickFunc.mock.calls).toHaveLength(0)
        expect(tmpClickCount).toBe(0)
        expect(tmpHoverCount).toBe(1)
    })
    test("hover and click test", () => {
        let tmpClickCount = 0
        let tmpHoverCount = 0
        const buttonLabel = "Button ラベル"
        const mockClickFunc = jest.fn(() => tmpClickCount++)
        const mockHoverFunc = jest.fn(() => tmpHoverCount++)
        const buttonProps: ButtonPropsType = {
            label: buttonLabel,
            onClickFunc: () => mockClickFunc(),
            onMouseOverFunc: () => mockHoverFunc()
        }
        const component = render(<Button {...buttonProps} />)
        const button = component.getByText(buttonLabel)
        userEvent.hover(button)
        userEvent.click(button, undefined, { skipHover: true })
        userEvent.unhover(button)
        expect(mockHoverFunc.mock.calls).toHaveLength(2) // The first time user clicks, the onFocus action will be called.
        expect(mockClickFunc.mock.calls).toHaveLength(1)
        expect(tmpClickCount).toBe(1)
        expect(tmpHoverCount).toBe(2)
    })
})