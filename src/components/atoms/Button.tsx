export type ButtonPropsType = {
  label: string
  onClickFunc: () => void
  onMouseOverFunc?: () => void
}

const Button: React.FC<ButtonPropsType> = (props) => {
  const { label, onClickFunc, onMouseOverFunc } = props
  return (
    <button
      type="button"
      onClick={onClickFunc}
      onMouseOver={onMouseOverFunc}
      onFocus={onMouseOverFunc}
    >
      {label}
    </button>
  )
}

export default Button
