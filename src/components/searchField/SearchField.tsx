import Box from '@mui/material/Box';
import { Search, SearchIconWrapper, StyledInputBase } from './styled';
import { ReactComponent as SearchIcon } from '../../assets/img/searchIcon.svg';
import { CustomInfo } from '../../sharedComponents/customInfo/CustomInfo';
import { ChangeEvent } from 'react';

type SearchFieldTypes = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const SearchField = ({ value, onChange }: SearchFieldTypes) => {
  return (
    <Box>
      <CustomInfo>Filter by keywords</CustomInfo>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={value}
          onChange={onChange}
        />
      </Search>
    </Box>
  );
};
