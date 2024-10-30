import type { DotCMSContentlet } from "types";
import type { FC } from "react";
import useImageSrc from "hooks/useImageSource";

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export type EntryProps = {
  contentlet: DotCMSContentlet;
};

export const Entry: FC<EntryProps> = ({ contentlet }) => {
  const src = useImageSrc({
    identifier: contentlet.identifier,
    image: contentlet.image,
  });

  return (
    <>
      <a
        className="relative min-w-32"
        href={contentlet.urlMap || contentlet.url}
      >
        {contentlet.image && (
          <img
            src={src}
            alt={contentlet.urlTitle}
            className="absolute left-0 top-0 size-full object-cover"
          />
        )}
      </a>
      <div className="flex flex-col gap-1">
        <a
          className="text-sm font-bold text-zinc-900"
          href={contentlet.urlMap || contentlet.url}
        >
          {contentlet.title}
        </a>
        <time className="text-zinc-600">
          {new Date(contentlet.modDate).toLocaleDateString(
            "en-US",
            dateFormatOptions,
          )}
        </time>
      </div>
    </>
  );
};
