type TextPropsType = {
  text: string
}

const Text: React.FC<TextPropsType> = (props) => {
  const { text } = props;
  return (
    <div>
      {text}
    </div>
  );
};

export default Text;
