import styled, { css } from 'styled-components';

const primaryStyle = css `
  background-color: red;
`;

const StyledButton = styled.button`
  padding: 20px;
  border-radius: 5px;
  ${props => props.color === 'primary' && primaryStyle }

`;

export default StyledButton;
