import ReactModal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./style";
import closeImg from '../../assets/close.svg'
import inconeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from "react";

interface NewTransactionModalPops {
  isOpen: boolean;
  onRequestClose: () => void;
}



export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalPops) {
  const [type, setType] = useState('deposit');

  return (
    <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >

      <button type="button" 
      onClick={onRequestClose}
      className="modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>
        <input 
          placeholder="Título"
        />

        <input type="number"
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox 
          type="button"
          onClick={() => { setType('deposit'); }}
          isActive={type === 'deposit'}
          activeColor="green"
          >
            <img src={inconeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
          type="button"
          onClick={() => { setType('withdraw'); }}
          isActive={type === 'withdraw'}
          activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </ReactModal>
  );
}