import type { FC } from "react";
import { DotCMSContentlet } from "types";
import Contentlet from "./Contentlet";
import { Entry } from "./Entry";

export type ContentletsProps = {
  contentlets: DotCMSContentlet[];
};

export const Contentlets: FC<ContentletsProps> = ({ contentlets }) => {
  return (
    <ul className="flex flex-col gap-7">
      {contentlets.map((contentlet) => (
        <Contentlet contentlet={contentlet} key={contentlet.identifier}>
          <li className="flex min-h-16 gap-7">
            <Entry contentlet={contentlet} />
          </li>
        </Contentlet>
      ))}
    </ul>
  );
};
