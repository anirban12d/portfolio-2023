import { Client, cacheExchange, fetchExchange } from "@urql/core";
import {
  fetchAllPosts,
  fetchMorePosts,
  fetchSinglePost,
} from "~/graphql/hashnode-queries";
const client = new Client({
  url: "https://gql.hashnode.com/",
  exchanges: [cacheExchange, fetchExchange],
});

export async function HashnodeAllPosts() {
  const data = client
    .query(fetchAllPosts, {
      host: "anirbandas.in/blog",
    })
    .toPromise()
    .then((result) => {
      return result;
    });
  return data;
}
export async function HashnodeMorePosts(postCount: number, after: any) {
  const data = client
    .query(fetchMorePosts, {
      host: "anirbandas.in/blog",
      after: after,
      postCount: postCount,
    })
    .toPromise()
    .then((result) => {
      return result;
    });
  return data;
}
export async function HashnodeFetchSinglePost(slug: string) {
  const data = client
    .query(fetchSinglePost, {
      host: "anirbandas.in/blog",
      slug: slug,
    })
    .toPromise()
    .then((result) => {
      return result;
    });
  return data;
}
