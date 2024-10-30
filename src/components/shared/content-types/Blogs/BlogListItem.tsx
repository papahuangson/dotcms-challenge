import Tag from 'components/shared/Tag'
import { Link } from 'react-router-dom'
import { DotCMSContentlet } from 'types'

export default function BlogListItem({ post }: { post: DotCMSContentlet }) {
  return (
    <div
      key={post.identifier}
      className="border border-transparent border-b-gray-300 pb-8 last:border-transparent"
    >
      <h3 className="text-2x1 font-semibold ">
        <Link
          to={{ pathname: `/blog/post/${post.urlTitle}` }}
          state={{ identifier: post.identifier }}
          className="inline text-blue-950 hover:underline"
        >
          {post.title}
        </Link>
      </h3>

      <p className="text-sm">
        {!!post.author && (
          <>
            By: {post.author[0].firstName} {post.author[0].lastName} on{' '}
          </>
        )}
        {new Date(post.postingDate).toLocaleDateString('en-US')}
      </p>
      <p className="py-2 text-base">{post.teaser}</p>
      {post.tags.map((tag: string) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  )
}
