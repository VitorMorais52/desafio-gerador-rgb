import { Container } from "./styles";

type BoxProps = {
  children: React.ReactNode;
  align?: string;
  marginBottom?: string;
};
function Box({ children, align, marginBottom }: BoxProps) {
  return (
    <Container align={align} marginBottom={marginBottom}>
      {children}
    </Container>
  );
}
export default Box;
