import { COLORS } from '../../constants/design';
import styled from 'styled-components';

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  position: relative;
`;

export const ProgressContainer = styled.div`
  display:flex;
  align-items:center;
`;
export const ProgressDiv = styled.div<{
    color?: string;
  }>`
  background: ${props => (props.color ? props.color : COLORS.LIGHT_GREY)};
  //opacity: 0.25;
  border-radius: .5rem;
  width: 160px;
  height: 6px;
`;


export const CountLabel = styled.div`
position: absolute;
top: -32px;
right: 21px;
width: 16px;
font-weight: bold;
color: ${COLORS.BLACK};

`;

export const Progress = styled.div<{
    color?: string;
  }>`
  background:${props => (props.color ? props.color : COLORS.RED)};
//   background: linear-gradient(to right, );

  border-radius: 1rem;
  height: 6px;
  transition: 1s ease;
  transition-delay: 0.5s;
  position: relative;
`;

export const Label = styled.div`
  color: ${COLORS.WHITE};
`;