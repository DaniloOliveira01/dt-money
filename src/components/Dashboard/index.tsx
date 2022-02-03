import { Summary } from "../Summary";
import { Transiction } from "../Transictions";
import { Container } from "./style";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Transiction />
    </Container>
  );
}