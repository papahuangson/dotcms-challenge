import BlogListing from "components/shared/content-types/BlogListing";
import ProductPromo from "components/ProductPromo";

export default function VtlInclude(props: any) {
  const { widgetCodeJSON } = props;

  // intercept the widgetCodeJSON and render the appropriate component
  if (widgetCodeJSON && Object.keys(widgetCodeJSON).length > 0) {
    return <BlogListing posts={widgetCodeJSON.posts} />;
  }

  // TODO - probably a better way
  if (props.title === "Recommended Products") {
    return <ProductPromo />;
  }

  return <></>;
}
