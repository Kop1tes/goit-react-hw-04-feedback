import React from "react";
import PropTypes from "prop-types";
import { ButtonContainer, Button } from "./Buttons.styled";

export const Buttons = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonContainer>
            {options.map((option) => (
                <Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option}</Button>
            ))}
        </ButtonContainer>
    )
};

Buttons.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
};