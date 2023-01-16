import Box from '@mui/material/Box';
import { Search, SearchIconWrapper, StyledInputBase } from './styled';
import { ReactComponent as SearchIcon } from '../../assets/img/searchIcon.svg';
import { CustomInfo } from '../../sharedComponents/customInfo/CustomInfo';

export const SearchField = () => {
  return (
    <Box>
      <CustomInfo>Filter by keywords</CustomInfo>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Box>
  );
};
