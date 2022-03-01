import { useState, useEffect } from "react";

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

  const date = new Date();

  const day = String(date.getDate()).padStart(2, "0");
  const mounth = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const currentDate = day + "/" + mounth + "/" + year;
  const time = hours + ":" + minutes;

  return (
    <Container>
      <Content>
        <h1>Gerador RGB</h1>
        <Box align="flex-start" marginBottom="2rem">
          <div>
            <img src={iconDropper} alt="icon dropper" />
            <strong>
              {currentDate} - {time}
            </strong>
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
