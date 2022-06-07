import React from "react";
import { COLORS } from "../../../constants/design";
import { IPokemon, IPokemonType } from "../typings";
import StatsProgressBar from "./progressBar";
import { Button, Content, PokeImage, PokeTypes, Tag, Title, TopContent } from "./styles";

export interface ModalContentProps {
  handleClose?: () => void;
  open?: boolean;
  data: IPokemon;
}

export const ModalContent: React.FC<ModalContentProps> = (
  props,
): JSX.Element => {
  const {data,handleClose}= props;

  const handlColorByPokeType = (type:string) => {
  let color;
  switch (type) {
      case "fire":
        color = COLORS.YELLOWB;
      break;
      case "grass":
        color =  COLORS.NAVY;
      break;
      case "poisson":
        color =  COLORS.BLUE_GREY;
      break;
      case "flying":
        color =  COLORS.BLUE;
      break;
      case "bug":
        color =  COLORS.RED;
      break;
      case "normal":
        color =  COLORS.FUNNY;
      break;
      default:
        color =  COLORS.GREEN;
  }
  return color;
  }
  return (
    <Content>
        <TopContent>
            <Title>{data?.name}</Title>
            <PokeTypes>
            {data?.types.map((item:IPokemonType)=>(
                <Tag color={handlColorByPokeType(item.type.name)}>{item.type.name}</Tag>
            ))}
            </PokeTypes>
        </TopContent>
        <TopContent>
            <StatsProgressBar stats={data?.stats} />
            <PokeImage src={data?.sprites.front_default} alt=""/>
        </TopContent>

        <Button onClick={handleClose}>Cancel</Button>
    </Content>
  );
};

export default ModalContent;