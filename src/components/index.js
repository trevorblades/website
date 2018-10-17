import styled from 'react-emotion';
import theme from '@trevorblades/mui-theme';

export const sectionPadding = theme.spacing.unit * 7;
export const Section = styled.section({
  padding: sectionPadding
});

export const ConstrainedSection = styled(Section)({
  maxWidth: theme.breakpoints.values.lg,
  margin: '0 auto'
});
