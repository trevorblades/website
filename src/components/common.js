import Grid from '@material-ui/core/Grid';
import styled from '@emotion/styled';
import theme from '@trevorblades/mui-theme';
import withProps from 'recompose/withProps';

export const sectionPadding = theme.spacing.unit * 7;
export const Section = styled.section({
  maxWidth: theme.breakpoints.values.lg,
  margin: '0 auto',
  padding: sectionPadding
});

export const Spacer = styled.div({
  height: sectionPadding * 1.5
});

export const GridItem = withProps({
  item: true
})(Grid);
