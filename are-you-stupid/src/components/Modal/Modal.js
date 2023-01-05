import styled from "styled-components";
import Button from "../_shared/Button/Button";
import React, { useState } from "react";
import YesModal from "../YesModal/YesModal";

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 90px auto;
  flex-direction: column;
  border: 3px solid #303247;
  border-radius: 10px;
  max-width: 500px;
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 15px;
`;
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalWrapper>
      <h2>Are you stupid?</h2>
      <ButtonWrapper>
        <Button onClick={toggleModal}>Yes</Button>
        <Button shouldMove>No</Button>
      </ButtonWrapper>
      {isOpen && <YesModal onClose={toggleModal} />}
    </ModalWrapper>
  );
};

export default Modal;
