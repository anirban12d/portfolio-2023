import { Client, cacheExchange, fetchExchange } from "@urql/core";
import {
  fetchAllPosts,
  fetchMorePosts,
  fetchSinglePost,
} from "~/graphql/hashnode-queries";
const client = new Client({
  url: import.meta.env.PUBLIC_HASHNODE_GQL_ENDPOINT,
  exchanges: [cacheExchange, fetchExchange],
});

const hostKey = import.meta.env.PUBLIC_HASHNODE_PUBLICATION_HOST

export async function HashnodeAllPosts() {
  const data = client
    .query(fetchAllPosts, {
      host: hostKey,
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
      host: hostKey,
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
      host: hostKey,
      slug: slug,
    })
    .toPromise()
    .then((result) => {
      return result;
    });
  return data;
}
