
import * as React from 'react';
import ButtonIcon from '../../../components/buttons/IconButton';
import { HeaderTitle, SearchBarContent, SearchBarInput } from './styles';
import SearchIcon from '@material-ui/icons/Search';



export interface SearchBarProps {
}

const SearchBar: React.FC<SearchBarProps> = (
  props,
): JSX.Element => {
  return (
    <SearchBarContent>
     <HeaderTitle>Who are you looking for?</HeaderTitle>
     <div>
     <SearchBarInput type="search" placeholder='E.g Pikachu'/>
     <ButtonIcon icon={<SearchIcon color="primary" />} />
     </div>
    </SearchBarContent>
  )
};

export default SearchBar;
