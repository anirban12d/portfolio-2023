import { gql } from "@urql/core";

export const fetchAllPosts = gql`
  query Publication($host: String!) {
    publication(host: $host) {
      isTeam
      id
      title
      about {
        markdown
      }
      posts(first: 9) {
        edges {
          node {
            id
            title
            slug
            subtitle
            coverImage {
              url
              attribution
              photographer
              isAttributionHidden
            }
            brief
            seo {
              title
              description
            }
            readTimeInMinutes
            tags {
              id
              name
              slug
            }
            content {
              markdown
              html
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
  query Publication($host: String!) {
    publication(host: $host) {
      isTeam
      id
      title
      about {
        markdown
      }
      post(
        slug: "title-unveiling-the-evolution-a-journey-through-the-history-of-nodejs"
      ) {
        id
        slug
        readTimeInMinutes
        seo {
          title
          description
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
      posts(first: 7) {
        edges {
          node {
            id
            title
            slug
            subtitle
            coverImage {
              url
              attribution
              photographer
              isAttributionHidden
            }
            brief
            seo {
              title
              description
            }
            readTimeInMinutes
            tags {
              id
              name
              slug
            }
            content {
              markdown
              html
            }
          }
        }
      }
    }
  }
`;

export const fetchSinglePost = gql`
  query Publication($slug: String!, $host: String!) {
    publication(host: $host) {
      isTeam
      title
      about {
        markdown
      }
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
          html
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
