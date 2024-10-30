import useImageSrc from "hooks/useImageSource";
import { DotCMSContentlet } from "types";

export type BannerProps = DotCMSContentlet;

export default function Banner({
  title,
  image,
  caption,
  buttonText,
  link,
  identifier,
}: DotCMSContentlet) {
  const src = useImageSrc({
    image,
    identifier,
  });

  return (
    <div className="relative h-96 w-full bg-gray-200 p-4">
      {image && (
        <img
          src={src}
          className="absolute left-0 top-0 size-full object-cover"
          alt={title}
        />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
        <h2 className="text-shadow mb-2 text-6xl font-bold">{title}</h2>
        <p className="text-shadow mb-4 text-xl">{caption}</p>
        <a
          className="rounded bg-blue-500 p-4 text-xl transition duration-300 hover:bg-blue-600"
          href={link || "#"}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
