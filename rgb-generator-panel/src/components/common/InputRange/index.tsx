//styles
import { Container } from "./styles";

type InputRangeProps = {
  color: string;
  value: number;
  changeValue: (value: number) => void;
};

function InputRange({ color, value, changeValue }: InputRangeProps) {
  return (
    <Container color={color}>
      <input
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={({ target }) => changeValue(parseInt(target.value))}
      />
    </Container>
  );
}

export default InputRange;
