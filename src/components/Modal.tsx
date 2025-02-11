import styled from "styled-components";

const ModalContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: { nome: string; descricao: string; preco: number } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <h2>{product.nome}</h2>
        <p>{product.descricao}</p>
        <p>Preço: R$ {product.preco.toFixed(2)}</p>
        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
