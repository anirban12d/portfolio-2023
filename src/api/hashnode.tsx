import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://gql.hashnode.com/",
  cache: new InMemoryCache(),
});

export async function HashnodeAllPosts() {
  const data = client
    .query({
      query: gql`
        query Publication {
          publication(host: "anirban12d.hashnode.dev") {
            isTeam
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
            posts(first: 5) {
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
      `,
    })
    .then((result) => {
      return result;
    });
  return data;
}

export async function HashnodeFetchSinglePost(PostSlug: string) {
  const data = client
    .query({
      query: gql`
        query Publication($slug: String!) {
          publication(host: "anirban12d.hashnode.dev") {
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
      `,
      variables: {
        slug: PostSlug,
      },
    })
    .then((result) => {
      return result;
    });
  return data;
}
