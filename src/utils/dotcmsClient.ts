import { DotCmsClient } from "@dotcms/client";
import { DotcmsNavigationItem, DotCMSPageAsset } from "../types";
import axios from "axios";

export const client = DotCmsClient.init({
  dotcmsUrl: import.meta.env.VITE_DOTCMS_HOST || "",
  authToken: import.meta.env.VITE_DOTCMS_AUTH_TOKEN || "",
  siteId: "59bb8831-6706-4589-9ca0-ff74016e02b2",
  requestOptions: {
    cache: "no-cache",
  },
});

export type GetPageDataResponse = {
  pageAsset?: DotCMSPageAsset;
  nav?: DotcmsNavigationItem[];
  error?: unknown;
};

export const getPageData = async (
  section: string | undefined,
): Promise<GetPageDataResponse> => {
  try {
    const path = section || "/";

    const pageAsset = (await client.page.get({
      path,
      depth: 2,
    })) as DotCMSPageAsset;

    return { pageAsset, nav: [] };
  } catch (error) {
    console.error("Error fetching Page Date:", error);
    return { pageAsset: undefined, nav: undefined, error };
  }
};

export const fetchImage = async (identifier: string) => {
  try {
    const response = await axios.get(
      `https://demo.dotcms.com/api/v1/image/id/${identifier}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};

export const fetchBlogs = async () => {
  try {
    const response = await fetch("https://demo.dotcms.com/api/v1/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_DOTCMS_AUTH_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
            query ContentAPI {
              BlogCollection(query: "", limit: 10, offset: 0, sortBy: "score") {
                title
                teaser
                urlMap
                postingDate
                urlTitle
                identifier
                tags
                author {
                  firstName
                  lastName
                }
              }
            }
          `,
      }),
    });

    const { data } = await response.json();
    return data.BlogCollection;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};
