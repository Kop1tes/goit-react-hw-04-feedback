import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`

export const Button = styled.button`
    border-radius: 5px;
    border-color: grey;
    cursor: pointer;
    background-color: yellow;

    &:hover {
        background-color: blue;
    }
`