import React, { useState, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ children, onClick, className, disabled, shouldMove }) => {
  const ref = useRef();

  const [buttonX, setButtonX] = useState(0);
  const [buttonY, setButtonY] = useState(0);

  const StyledBtn = styled.button`
    padding: 16px 32px;
    border-radius: 10px;
    text-transform: uppercase;
    background-color: #f6e308;
    border: none;
    font-size: 20px;
    font-weight: 500;
    transform: translate(${buttonX}px, ${buttonY}px);
    &:hover {
      background-color: #e5d736;
    }
  `;
  const handleMouseEnter = () => {
    if (!shouldMove) {
      return;
    }
    if (buttonX !== 0 && buttonY !== 0) {
      setButtonX(0);
      setButtonY(0);
      return;
    }

    const buttonBoundingClientRect = ref.current.getBoundingClientRect();
    const buttonWidth = buttonBoundingClientRect.width;
    const buttonHeight = buttonBoundingClientRect.height;
    // const buttonWidth
    setButtonX(Math.random() * 100 + buttonWidth);
    setButtonY(Math.random() * 100 + buttonHeight);
  };
  const handleClick = (e) => {
    if (!disabled) {
      onClick(e);
    }
  };
  return (
    <StyledBtn
      ref={ref}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className={className}
      disabled={disabled}
    >
      {children}
    </StyledBtn>
  );
};

export default Button;

Button.defaultProps = { onClick: () => {}, className: "", disabled: false };

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  shouldMove: PropTypes.bool,
};
