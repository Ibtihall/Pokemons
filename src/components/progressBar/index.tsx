
import * as React from 'react';
import { useEffect } from 'react';
import {  
  Content, 
  Progress, 
  ProgressContainer, 
  ProgressDiv, 
  CountLabel
 } from './styles';

export interface ProgressBarProps {
  progressValue:number;
  colors:any;
}
const ProgressBar: React.FC<ProgressBarProps> = (
  props,
): JSX.Element => {
  const { progressValue, colors} = props

  return (
    <Content>

      <ProgressContainer>
        <ProgressDiv color={colors.bgColor}>
          <Progress style={{ width: `${progressValue}%` }} color={colors.color} >
          </Progress>
        </ProgressDiv>
      </ProgressContainer>
    </Content>
  )
};

export default ProgressBar;
