
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
        <SearchBarInput type="search" placeholder='Search' />
    </SearchBarContent>
  )
};

export default SearchBar;
