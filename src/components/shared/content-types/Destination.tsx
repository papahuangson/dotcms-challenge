import useImageSrc from "hooks/useImageSource";
import { useNavigate } from "react-router-dom";
import { DotCMSContentlet } from "types";

function Destination(props: DotCMSContentlet) {
  const navigate = useNavigate();
  const { title, description, identifier, image, urlTitle } = props;
  const imageSrc = useImageSrc({
    image,
    identifier,
  });
  return (
    <article
      className="mb-4 overflow-hidden rounded bg-white shadow-lg"
      onClick={() => navigate(`/activities/${urlTitle || "#"}`)}
      role="button"
    >
      {image && (
        <img
          className="w-full"
          src={imageSrc}
          width={100}
          alt={title}
          onError={(e) => {
            e.currentTarget.src = "http://placekitten.com/200/200";
          }}
        />
      )}
      <div className="px-6 py-4">
        <p className="mb-2 text-xl font-bold">{title}</p>
        <p className="line-clamp-3 text-base">{description}</p>
      </div>
    </article>
  );
}

export default Destination;
