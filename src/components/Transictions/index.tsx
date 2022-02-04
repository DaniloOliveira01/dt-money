import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function Transiction() {
  useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
  }, []);


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento do website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimeto</td>
            <td>02/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="widthdraw">- R$1.100</td>
            <td>Casa</td>
            <td>19/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}