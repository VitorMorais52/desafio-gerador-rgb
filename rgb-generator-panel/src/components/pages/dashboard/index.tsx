import { useState } from "react";

//components
import InputRange from "../../common/InputRange";
import Box from "../../common/Box";

//styles
import { Container, Content, ResultColor } from "./styles";
import iconDropper from "../../../assets/dropper.svg";

function Dashboard() {
  const [greenValue, setGreenValue] = useState(0);
  const [redValue, setRedValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  return (
    <Container>
      <Content>
        <h1>Gerador RGB</h1>
        <Box align="flex-start" marginBottom="2rem">
          <div>
            <img src={iconDropper} alt="icon dropper" />
            <strong>01/03/2022 - 06:54</strong>
          </div>
        </Box>
        <Box>
          <div className="colors">
            <InputRange
              color="red"
              value={redValue}
              changeValue={setRedValue}
            />
            <InputRange
              color="green"
              value={greenValue}
              changeValue={setGreenValue}
            />
            <InputRange
              color="blue"
              value={blueValue}
              changeValue={setBlueValue}
            />
          </div>
          <ResultColor red={redValue} green={greenValue} blue={blueValue} />
          <strong>
            rgba({redValue}, {greenValue}, {blueValue})
          </strong>
        </Box>
      </Content>
    </Container>
  );
}

export default Dashboard;
