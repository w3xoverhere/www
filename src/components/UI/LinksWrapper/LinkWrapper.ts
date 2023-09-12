import styled from 'styled-components';

export const LinkWrapper = styled.div`
    & a {
      color: red;
      font-family: ${props=>props.theme.text.fontFamily[0]}
    }

    & .active {
        color: blue;
    }
`;
