import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByName, getPokemons } from "./slices";
import InfiniteScroll from "react-infinite-scroll-component";
import Modaltemplate from "../../components/modal";
import ModalContent from "./components/ModalContent";
import { Button, Content, Poke, PokeImage, PokeTitle, TopContent } from "./styles";
import SearchBar from "./components/SearchBar";
import { PokeType } from "./typings";
import { getIdFromUrl } from "../../utils/utils";
export interface DashboardPageProps {
}
const DashboardPage: React.FC<DashboardPageProps> = (
  props,
): JSX.Element => {
  const dispatch = useDispatch();
  const { pokemons, pokeDetails, isLoading } = useSelector((state: any) => state.pokemons);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    //@ts-ignore
    dispatch(getPokemons(0));
  }, [dispatch]);

  const getPokemonDetails = (name: string) => {
    if (name) {   
      //@ts-ignore
      dispatch(getPokemonByName(name));
    }
  };

  const fetchMoreData = () => {
    setPage(page + 1);
    setTimeout(() => {
      //@ts-ignore
      dispatch(getPokemons(page))
    }, 1500);
  };


  const handleOpen = () => {
    setOpen(true);
  };
  const closeDelete = () => {
    setOpen(false);
  }

  return (
    <>
      <SearchBar />
      <Modaltemplate
        open={open}
        handleClose={closeDelete}
        templat={
          <ModalContent data={pokeDetails} handleClose={closeDelete} isLoading={isLoading} />
        }
      />
      <InfiniteScroll
        dataLength={pokemons.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<Content><Poke><h4>Loading...</h4></Poke></Content>}
      >
        <Content>
          {pokemons.map((i: PokeType) => (
            <Poke onClick={() => {
              handleOpen();
              getPokemonDetails(i.name)
            }}>
              <TopContent>
                <PokeTitle>
                  {i.name}
                </PokeTitle>
                <span style={{ color: 'gray', fontWeight: 'bold', fontSize: 12 }}>
                  #0{getIdFromUrl(i.url)}
                </span>
              </TopContent>
              <PokeImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdFromUrl(i.url)}.png`} />
              <Button
                onClick={() => {
                  handleOpen();
                  getPokemonDetails(i.name)
                }}>
                Details
              </Button>
            </Poke>
          ))}
        </Content>
      </InfiniteScroll>
    </>
  );
};

export default DashboardPage;
