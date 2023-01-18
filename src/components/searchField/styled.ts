import styled from '@emotion/styled';
import { Box, InputBase } from '@mui/material';
import { bp } from '../../assets/mediaQueries';
import { color } from '../../assets/variables';

export const Search = styled(Box)`
  margin: 10px 0 40px;
  box-sizing: border-box;
  position: relative;
  border: 1px solid ${color.line};
  width: 100%;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);

  @media (min-width: calc(${bp.sm} + 100px)) {
    width: 600px;
  }
`;

export const SearchIconWrapper = styled(Box)`
  padding: 0 20px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInputBase = styled(InputBase)`
  &.MuiInputBase-root {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    padding-left: 60px;
    padding-right: 10px;
    height: 100%;
    width: 100%;
    color: ${color.primaryText};
    font-size: 16px;
  }
`;
