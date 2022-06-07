import styled from 'styled-components';
import { BUTTON_COLORS, COLORS, FONTS } from '../../constants/design';

export const Content = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  margin: 0px 100px 100px 100px;
`;

export const Poke = styled.div`
  display: flex;
  background:${COLORS.WHITE};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width:180px;
  height:200px;
  flex-direction:column;
  margin:10px;
  align-items:center;
`;

export const TopContent = styled.div`
  padding:5px;
  margin:5px;
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  width:100%;
  align-items:center;
`;

export const Label = styled.div`
  color: red;
  font-family: Roboto;
  font-size: 22px;
  letter-spacing: -0.05px;
  line-height: 20px;
  margin-bottom: 12px;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  font-white:bold;
  justify-content: center;
`;

export const Button = styled.button`
  background: ${BUTTON_COLORS.DARK_BLUE};
  color: ${COLORS.WHITE};
  font-size: 12px;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 15px;
  border:none;
  width:40%;
  padding-top:5px;
  padding-bottom:5px;
  font-weight:bold;
  font-family:${FONTS.THEME_FONT};
`;

export const PokeImage = styled.img`
  width:80px;
  padding-top:16px;
`;

export const PokeTitle = styled.div`
display: flex;
font-family: ${FONTS.THEME_FONT};
font-size: 18px;
font-weight: bold;
letter-spacing: 0;
line-height: 19px;
text-align: right;
`;
