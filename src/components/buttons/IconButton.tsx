import React from 'react';
import { StyledIconButton } from './styles';

export interface ButtonIconProps {
  icon: React.ReactNode;
}

const ButtonIcon: React.FC<ButtonIconProps> = (props): JSX.Element => {
  return (
    <StyledIconButton>
      {props.icon}
    </StyledIconButton>
  );
};

export default ButtonIcon;
