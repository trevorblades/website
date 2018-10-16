import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'react-emotion';
import theme, {getLinearGradient} from '@trevorblades/mui-theme';

const Container = styled.div({
  height: '100vh',
  color: theme.palette.common.white,
  backgroundImage: getLinearGradient()
});

const Home = () => (
  <Container>
    <Typography variant="h1" color="inherit">
      I like to make cool stuff
    </Typography>
  </Container>
);

export default Home;
