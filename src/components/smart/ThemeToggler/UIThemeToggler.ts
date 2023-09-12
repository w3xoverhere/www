import styled from 'styled-components';

export const UIThemeToggler = styled.button`
  background-color: ${(props) => props.theme.palette.third};
  height: 24px;
  width: 62px;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;
