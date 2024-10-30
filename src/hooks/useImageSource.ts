const hostname = import.meta.env.VITE_DOTCMS_HOST || "";

export default function useImageSrc({
  identifier,
  image,
}: {
  identifier: string;
  image: string;
  width?: string;
}) {
  const imageSRC = identifier.includes("/dA/")
    ? identifier
    : `/dA/${identifier}`; // Check if the image is a DotCMS asset or a file asset

  return `${hostname}${imageSRC}/${image}`;
}
