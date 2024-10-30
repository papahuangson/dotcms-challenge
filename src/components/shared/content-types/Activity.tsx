import useImageSrc from 'hooks/useImageSource'
import { useNavigate } from 'react-router-dom'
import { DotCMSContentlet } from 'types'

export default function Activity(props: DotCMSContentlet) {
  const navigate = useNavigate()
  const { title, description, identifier, image, urlTitle } = props
  const imageSrc = useImageSrc({
    image,
    identifier
  })
  return (
    <article
      className="group mb-4 overflow-hidden rounded bg-white shadow-lg hover:shadow-2xl"
      onClick={() => navigate(`/activities/${urlTitle || '#'}`)}
      role="button"
      aria-label={`Link to ${title}`}
      title={title}
    >
      {image && (
        <img
          className="w-full"
          src={imageSrc}
          width={100}
          alt={title}
          onError={(e) => {
            e.currentTarget.src = 'http://placekitten.com/200/200'
          }}
        />
      )}
      <div className="px-6 py-4">
        <p className="mb-2 text-xl font-bold group-hover:underline">{title}</p>
        <p className="line-clamp-3 text-base">{description}</p>
      </div>
    </article>
  )
}
