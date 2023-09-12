import styled from 'styled-components';

export const UICircleToggler = styled.div<{ $active?: boolean }>`
  height: 20px;
  width: 20px;
  background-color: aliceblue;
  transition: 0.5s ease-in-out;
  transform: translateX(${(props) => (props.$active ? '42px' : '-1px')});
  border-radius: 10px;
`;
