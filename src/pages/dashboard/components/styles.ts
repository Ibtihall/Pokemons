import styled from 'styled-components';
import { COLORS, FONTS } from '../../../constants/design';

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  background:white;
  border-radius: 8px;
  padding:16px;
  width:500px;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  padding:10px;
`;

export const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  padding:20px;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom:6px;
`;

export const StatTitle = styled.div`
  display: flex;
  font-family: ${FONTS.THEME_FONT};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
  text-align: right;
`;

export const PokeTypes = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Tag = styled.div<{
  color?: string;
}>`
  display: flex;
  color:${COLORS.WHITE};
  background:${COLORS.GREEN};
  background: ${props => (props.color ? props.color : COLORS.GREEN)};
  font-size: 12px;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 15px;
  font-weight: bold;
`;

export const Title = styled.div`
font-family: ${FONTS.THEME_FONT};
font-size: 32px;
font-weight: bold;
letter-spacing: -0.05px;
line-height: 20px;
margin-bottom: 12px;
margin-top: 12px;
padding-left:14px;
`;

export const Button = styled.button`
  background: white;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid gray;
  border-radius: 3px;
`;

export const PokeImage = styled.img`
  width:140px;
  padding-top:16px;
`;

export const SearchBarContent = styled('div')`
  display: flex;
  padding:16px;
  height:200px;
  background:${COLORS.DARK_BLUE};
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;

export const HeaderTitle = styled.div`
font-family: ${FONTS.THEME_FONT};
color:${COLORS.WHITE};
font-size: 42px;
font-weight: bold;
letter-spacing: -0.05px;
line-height: 20px;
margin-bottom: 12px;
margin-top: 12px;
padding-left:14px;
`;

export const SearchBarInput = styled.input`
font-family: ${FONTS.THEME_FONT};
font-size: 18px;
padding:8px 16px 8px;
letter-spacing: -0.05px;
line-height: 20px;
margin-bottom: 12px;
margin-top: 12px;
padding-left:14px;
border-radius:12px;
`;