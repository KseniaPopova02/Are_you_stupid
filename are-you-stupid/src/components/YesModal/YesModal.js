import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  border: 3px solid #303247;
  display: flex;
  border-radius: 10px;
  padding: 10px;
  max-width: 300px;
  margin: 30px auto;
`;

const Cross = styled.img`
  width: 18px;
  height: auto;
  margin: 0 10px;
`;

const YesModal = ({ onClose }) => {
  return (
    <Wrapper>
      <h2>I knew it!</h2>
      <Cross onClick={onClose} src="/images/cross-svgrepo-com.svg" alt="" />
    </Wrapper>
  );
};

export default YesModal;

YesModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
