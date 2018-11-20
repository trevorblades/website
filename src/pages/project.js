import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Footer from '../components/footer';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import snarkdown from 'snarkdown';
import styled, {css} from 'react-emotion';
import theme from '@trevorblades/mui-theme';
import twemoji from 'twemoji';
import {ConstrainedSection, GridItem, Spacer} from '../components';
import {Link} from 'react-router-dom';
import {MdExitToApp} from 'react-icons/md';

const Description = styled(Typography)({
  whiteSpace: 'pre-wrap',
  br: {
    display: 'block',
    content: "''",
    marginBottom: '1em'
  }
});

const marginRight = css({
  marginRight: theme.spacing.unit
});

class Project extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
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
        <MdExitToApp className={marginRight} />
        {host}
      </Button>
    );
  }

  render() {
    const {url, title, images, summary, awards} = this.props.project.attributes;
    return (
      <Fragment>
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
                {images.filter(image => !image.hidden).map(image => (
                  <GridListTile key={image.src} cols={image.cols || 1}>
                    <img src={image.src} alt={image.title} />
                  </GridListTile>
                ))}
              </GridList>
              <Spacer />
            </Fragment>
          )}
          <Grid container spacing={40}>
            <GridItem xs={12} sm={8}>
              <Description
                paragraph={Boolean(url)}
                dangerouslySetInnerHTML={{
                  __html: snarkdown(this.props.project.body) || summary
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
                      dangerouslySetInnerHTML={{
                        __html: twemoji.parse(
                          `${award.win ? '🏆' : '🏅'} ${title}`
                        )
                      }}
                    />
                  );
                })}
              </GridItem>
            )}
          </Grid>
        </ConstrainedSection>
        <Divider />
        <Footer />
      </Fragment>
    );
  }
}

export default Project;
