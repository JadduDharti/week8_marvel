// import 'styled-components';
// import { Theme } from '@mui/material/styles';

// declare module 'styled-components' {
//     export interface DefaultTheme extends Theme {}
// }

import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.secondary.main};
`;
