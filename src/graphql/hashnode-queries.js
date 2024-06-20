import { gql } from "@urql/core";

export const fetchAllPosts = gql`
  query Publication($host: String!) {
    publication(host: $host) {
      id
      title
      posts(first: 7) {
        edges {
          node {
            id
            title
            slug
            coverImage {
              url
              attribution
            }
            brief
            readTimeInMinutes
            tags {
              id
              name
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

export const fetchMorePosts = gql`
  query Publication($host: String!, $postCount: Int!, $after: String!) {
    publication(host: $host) {
      id
      title
      posts(first: $postCount, after: $after) {
        edges {
          node {
            id
            title
            slug
            coverImage {
              url
              attribution
            }
            brief
            readTimeInMinutes
            tags {
              id
              name
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

export const fetchSinglePost = gql`
  query Publication($slug: String!, $host: String!) {
    publication(host: $host) {
      title
      post(slug: $slug) {
        id
        title
        subtitle
        tags {
          id
          name
          slug
        }
        publishedAt
        slug
        readTimeInMinutes
        seo {
          title
          description
        }
        coverImage {
          url
          attribution
          photographer
          isAttributionHidden
        }
        content {
          markdown
        }
        features {
          tableOfContents {
            isEnabled
            items {
              id
              slug
              title
            }
          }
        }
      }
    }
  }
`;
