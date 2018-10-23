import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styled, {css} from 'react-emotion';
import theme from '@trevorblades/mui-theme';
import withProps from 'recompose/withProps';
import {Link} from 'react-router-dom';

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

export const withTargetBlank = withProps({
  target: '_blank',
  rel: 'noopener noreferrer'
});

export const withLink = withProps({component: Link});
export const LinkButton = withLink(Button);

export const GridItem = withProps({
  item: true
})(Grid);
