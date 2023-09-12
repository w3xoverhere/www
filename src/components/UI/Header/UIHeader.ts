import styled from 'styled-components';

export const UIHeader = styled.div`
  background-color: ${(props) => props.theme.palette.primary};
  font-family: ${(props) => props.theme.text.fontFamily[1]};
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  & .header-element {
    margin: 5px 20px;
  }
`;
