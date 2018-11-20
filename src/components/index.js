import Grid from '@material-ui/core/Grid';
import styled, {css} from 'react-emotion';
import theme from '@trevorblades/mui-theme';
import withProps from 'recompose/withProps';

export const sectionPadding = theme.spacing.unit * 7;
export const Section = styled.section({
  padding: sectionPadding
});

export const centered = css({margin: '0 auto'});
export const ConstrainedSection = styled(Section)(centered, {
  maxWidth: theme.breakpoints.values.lg
});

export const Spacer = styled.div({
  height: sectionPadding * 1.5
});

export const GridItem = withProps({
  item: true
})(Grid);
