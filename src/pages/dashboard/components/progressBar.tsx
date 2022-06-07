
import * as React from 'react';
import {  Stat, StatContent, StatTitle } from './styles';
import ProgressBar from '../../../components/progressBar';
import { COLORS } from '../../../constants/design';
import { IPokemonStat } from '../typings';

export interface StatsProgressBarProps {
  stats:any[];
}

const handlProgressBarColor = (type:string) => {
    let color;
    let bgColor;
    switch (type) {
        case "hp":
          color = COLORS.YELLOW;
          bgColor = COLORS.LIGHT_YELLOW;
        break;
        case "attack":
          color =  COLORS.NAVY;
          bgColor = COLORS.WHISPER;
        break;
        case "defense":
          color =  COLORS.RED;
          bgColor = COLORS.LIGHT_RED;
        break;
        case "special-attack":
          color =  COLORS.BLUE;
          bgColor = COLORS.LIGHT_BLUE;
        break;
        case "speed":
          color =  COLORS.FUNNY;
          bgColor = COLORS.FUNNY_LIGHT;
        break;
        default:
          color =  COLORS.GREEN;
          bgColor = COLORS.LIGHT_GREEN;

    }
    return {color,bgColor};
    }
const StatsProgressBar: React.FC<StatsProgressBarProps> = (
  props,
): JSX.Element => {
  const { stats} = props

  return (
    <StatContent>
        {stats && stats.map((item:IPokemonStat)=>(
            <Stat>
            <StatTitle>{item.stat.name}</StatTitle>
            <ProgressBar progressValue={item.base_stat} colors={handlProgressBarColor(item.stat.name)}/>
            </Stat>
        ))
            }
    </StatContent>
  )
};

export default StatsProgressBar;
