import { Box, IconButton, Typography, styled } from "@mui/material";

const StyledFooter = styled(Box)({
    background: '#1A1A1A',
    paddingTop:10,
    paddingBottom:10,
  });

const FooterLine = styled(Box)({
    width: '100%',
    height: 3,
    background: '#969696',
    opacity: 0.2,
    margin: '1rem auto',  
    flexShrink: 0,
  });

const Wrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    margin:20,
    color: 'white',
});

const Name =styled(Typography)({
    color: 'white',
});

const Logo = styled('img')({
    paddingRight: 10,
});

const BoxStyled = styled(Box)({
    display: 'flex',
    justifyContent: 'start',
    color: 'white'
});

const IconButtonStyled= styled(IconButton)({
    color: 'white',
    padding: 0,
});

  export {
    StyledFooter,
    FooterLine,
    Logo,
    Name,
    Wrapper,
    BoxStyled,
    IconButtonStyled,
  }