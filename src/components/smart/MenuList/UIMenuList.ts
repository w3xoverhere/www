import styles, { css } from 'styled-components';

export const UIMeniList = styles.div<{ $mode: 'light' | 'dark' }>`
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.palette.secondary};
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

    ${(props) =>
      props.$mode === 'dark' &&
      css`
        box-shadow: 0px 5px 5px -5px rgba(87, 33, 103, 0.34) inset;
      `}
`;
