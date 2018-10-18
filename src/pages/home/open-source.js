import React from 'react';
import Typography from '@material-ui/core/Typography';
import gql from 'graphql-tag';
import styled, {css} from 'react-emotion';
import theme from '@trevorblades/mui-theme';
import {ApolloClient} from 'apollo-client';
import {ConstrainedSection} from '../../components';
import {GoStar} from 'react-icons/go';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {Query} from 'react-apollo';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';

const Repositories = styled.ul({
  margin: 0,
  paddingLeft: 0,
  listStyle: 'none'
});

const Respository = styled.li({
  ':not(:last-child)': {
    marginBottom: theme.spacing.unit * 1.5
  }
});

const flexAlignCenter = css({
  display: 'flex',
  alignItems: 'center'
});

const Heading = styled.div(flexAlignCenter);
const Stars = styled.div(flexAlignCenter, {
  marginLeft: theme.spacing.unit,
  svg: {
    marginRight: theme.spacing.unit / 2
  }
});

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, {headers}) => ({
  headers: {
    ...headers,
    Authorization: `Bearer ${GITHUB_TOKEN}`
  }
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const query = gql`
  {
    repositoryOwner(login: "trevorblades") {
      pinnedRepositories(first: 6) {
        edges {
          node {
            id
            name
            description
            url
            stargazers(first: 100) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

const OpenSource = () => (
  <ConstrainedSection>
    <Typography variant="h3">Open source</Typography>
    <Typography paragraph variant="subtitle1">
      Here&apos;s just a few of my favourite open source projects
    </Typography>
    <Query client={client} query={query}>
      {({loading, data}) => {
        if (loading) return <Typography>Loading...</Typography>;
        return (
          <Repositories>
            {data.repositoryOwner.pinnedRepositories.edges.map(({node}) => (
              <Respository key={node.id}>
                <Heading>
                  <Typography
                    variant="h6"
                    component="a"
                    href={node.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {node.name}
                  </Typography>
                  <Stars>
                    <GoStar />
                    <Typography>{node.stargazers.edges.length}</Typography>
                  </Stars>
                </Heading>
                <Typography>{node.description}</Typography>
              </Respository>
            ))}
          </Repositories>
        );
      }}
    </Query>
  </ConstrainedSection>
);

export default OpenSource;
