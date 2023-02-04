import styled, {css} from 'styled-components';

const StyledButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid gray;
    color: gray;
    margin: 0 1em;
    padding 0.25em 1em;
    font-size: 20px;

    ${props => props.primary && 
        css`
        background: gray;
        color: white;
    `}
`;

export default StyledButton;


