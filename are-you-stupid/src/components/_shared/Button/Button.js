import React, { useState, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBtn = styled.button`
  padding: 16px 32px;
  border-radius: 10px;
  text-transform: uppercase;
  background-color: #f6e308;
  border: none;
  font-size: 20px;
  font-weight: 500;
  transform: translate(${(props) => props.x}px, ${(props) => props.y}px);
  &:hover {
    background-color: #e5d736;
  }
`;

const Button = ({ children, onClick, className, disabled, shouldMove }) => {
  const ref = useRef();

  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    if (!shouldMove) {
      return;
    }
    if (coordinates.x !== 0 && coordinates.y !== 0) {
      setCoordinates({ x: 0, y: 0 });
      return;
    }

    const buttonBoundingClientRect = ref.current.getBoundingClientRect();
    const buttonWidth = buttonBoundingClientRect.width;
    const buttonHeight = buttonBoundingClientRect.height;
    // const buttonWidth
    setCoordinates({
      x: Math.random() * 100 + buttonWidth,
      y: Math.random() * 100 + buttonHeight,
    });
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
      x={coordinates.x}
      y={coordinates.y}
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
