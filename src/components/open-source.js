import React from 'react';
import {Box, CardActionArea, Grid, Typography} from '@material-ui/core';
import {GoStar} from 'react-icons/go';
import {graphql, useStaticQuery} from 'gatsby';

export default function OpenSource(props) {
  const {github} = useStaticQuery(graphql`
    {
      github {
        repositoryOwner(login: "trevorblades") {
          login
          ... on GitHub_User {
            id
            pinnedItems(first: 6) {
              nodes {
                ... on GitHub_Repository {
                  id
                  name
                  description
                  url
                  stargazerCount
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Box
      p={{
        xs: 0,
        sm: 5
      }}
      bgcolor={{
        xs: 'none',
        sm: 'background.paper'
      }}
      border={{
        xs: 0,
        sm: 2
      }}
      borderColor={{
        sm: 'primary.main'
      }}
      {...props}
    >
      <Box mb={4}>
        <Typography display="block" variant="overline">
          Sharing is caring
        </Typography>
        <Typography variant="h2">open source projects</Typography>
      </Box>
      <Grid container spacing={3}>
        {github.repositoryOwner.pinnedItems.nodes.map(repo => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={repo.id}>
            <CardActionArea
              component="a"
              href={repo.url}
              style={{height: '100%'}}
            >
              <Box p={3} height="inherit" border={1} borderColor="divider">
                <Typography gutterBottom variant="h6">
                  {repo.name}
                </Typography>
                <Typography paragraph>{repo.description}</Typography>
                <Box display="flex" alignItems="center">
                  <GoStar style={{marginRight: 4}} />
                  <Typography>{repo.stargazerCount}</Typography>
                </Box>
              </Box>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
