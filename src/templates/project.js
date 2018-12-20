import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import Twemoji from 'react-twemoji';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';
import theme from '@trevorblades/mui-theme';
import {ConstrainedSection, GridItem, Spacer} from '../components/common';
import {Link} from '@reach/router';
import {MdExitToApp} from 'react-icons/md';
import {graphql} from 'gatsby';

const ExitToAppIcon = styled(MdExitToApp)({
  marginRight: theme.spacing.unit
});

export default class Project extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  renderLink(url) {
    const {host} = new URL(url);
    return (
      <Button
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
      >
        <ExitToAppIcon />
        {host}
      </Button>
    );
  }

  render() {
    const {frontmatter, html} = this.props.data.markdownRemark;
    const {url, title, images, summary, awards} = frontmatter;
    return (
      <Layout>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <ConstrainedSection>
          <Typography variant="caption">
            <Link to="/projects">&lt; All projects</Link>
          </Typography>
          <Typography gutterBottom variant="h2">
            {title}
          </Typography>
          {images && (
            <Fragment>
              <GridList cellHeight={350} cols={3}>
                {images
                  .filter(image => !image.hidden)
                  .map((image, index) => (
                    <GridListTile key={index} cols={image.cols || 1}>
                      <img src={image.src.publicURL} alt={image.title} />
                    </GridListTile>
                  ))}
              </GridList>
              <Spacer />
            </Fragment>
          )}
          <Grid container spacing={40}>
            <GridItem xs={12} sm={8}>
              <div
                dangerouslySetInnerHTML={{
                  __html: html || summary
                }}
              />
              {url && this.renderLink(url)}
            </GridItem>
            {awards && (
              <GridItem xs={12} sm={4}>
                {awards.map((award, index, array) => {
                  const title = typeof award === 'string' ? award : award.title;
                  return (
                    <Typography
                      key={title}
                      paragraph={index < array.length - 1}
                      variant="body1"
                    >
                      <Twemoji noWrapper>
                        <span>
                          {award.win ? '🏆' : '🏅'} {title}
                        </span>
                      </Twemoji>
                    </Typography>
                  );
                })}
              </GridItem>
            )}
          </Grid>
        </ConstrainedSection>
      </Layout>
    );
  }
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(fields: {path: {eq: $path}}) {
      html
      frontmatter {
        url
        title
        summary
        images {
          src {
            publicURL
          }
          title
          cols
          hidden
        }
        awards {
          title
          win
        }
      }
    }
  }
`;
