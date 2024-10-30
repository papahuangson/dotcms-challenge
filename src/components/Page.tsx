import { DotcmsLayout } from "@dotcms/react";
import { componentMap } from "components/shared/content-types";
import { useEffect } from "react";

import { useLoaderData, useLocation } from "react-router-dom";
import { DotcmsNavigationItem, DotCMSPageAsset } from "types";
import NotFound from "components/shared/NotFound";
import ErrorDisplay from "components/shared/ErrorDisplay";
import BlogPage from "./shared/content-types/Blogs/BlogPage";

export default function Page() {
  const loaderData = useLoaderData() as {
    pageAsset:
      | (DotCMSPageAsset & {
          urlContentMap?: { [key: string]: any };
          page?: { friendlyName: string; pageTitle: string };
        })
      | undefined;
    nav: DotcmsNavigationItem[] | undefined;
    error: unknown;
  };
  const { pageAsset, error } = loaderData;

  const location = useLocation();

  useEffect(() => {
    if (pageAsset) {
      const title = pageAsset.page?.friendlyName || pageAsset.page?.pageTitle;
      document.title = title || "not found";
    }
  }, [pageAsset]);

  const PageAssetLayout = () => (
    <div className="container mx-auto max-w-5xl bg-white">
      {/* {!!pageAsset && ( */}
      {pageAsset?.urlContentMap ? (
        <BlogPage {...pageAsset?.urlContentMap} />
      ) : (
        <DotcmsLayout
          pageContext={{
            components: componentMap,
            pageAsset: pageAsset!,
            isInsideEditor: false,
          }}
          config={{
            pathname: location.pathname,
            editor: { params: { depth: "3" } },
          }}
        />
      )}
    </div>
  );

  return error ? (
    (error as unknown as { status: number })?.status === 404 ? (
      <NotFound />
    ) : (
      <ErrorDisplay />
    )
  ) : (
    <PageAssetLayout />
  );
}
