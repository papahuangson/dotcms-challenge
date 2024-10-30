import Product from "components/shared/content-types/Product";
import Tag from "components/shared/Tag";
import { useEffect } from "react";

export default function BlogPage(props: any) {
  const renderContent = (content: any) => {
    return content?.map((block: any, index: number) => {
      switch (block.type) {
        case "paragraph":
          return (
            <p
              key={index}
              style={{ textAlign: block.attrs.textAlign }}
              className="py-2"
            >
              {block.content?.map((text: { text: string }, i: number) => (
                <span key={i}>{text.text}</span>
              ))}
            </p>
          );
        case "bulletList":
          return (
            <ul key={index} className="list-disc pb-2 pl-8">
              {block.content?.map((item: any, i: number) => (
                <li key={i}>{renderContent(item.content)}</li>
              ))}
            </ul>
          );
        case "dotImage":
          return (
            <img
              key={index}
              src={`${import.meta.env.VITE_DOTCMS_HOST}${block.attrs.src}`}
              alt={block.attrs.alt}
              className="my-6"
            />
          );
        case "table":
          return (
            <table key={index} className="w-full">
              {block.content?.map((row: any, rowIndex: number) => (
                <tr key={rowIndex}>
                  {row.content?.map((cell: any, cellIndex: number) => {
                    const CellType = cell.type === "tableHeader" ? "th" : "td";
                    return (
                      <CellType
                        key={cellIndex}
                        style={{
                          textAlign: cell.attrs?.textAlign || "left",
                        }}
                      >
                        {cell.content?.map((paragraph: any, pIndex: number) => (
                          <p key={pIndex} className="py-2">
                            {paragraph.content?.map(
                              (text: any, tIndex: number) => (
                                <span key={tIndex}>{text.text}</span>
                              ),
                            )}
                          </p>
                        ))}
                      </CellType>
                    );
                  })}
                </tr>
              ))}
            </table>
          );
        case "dotContent":
          switch (block.attrs.data.contentType) {
            case "Product":
              return (
                <div className="mt-10 inline-block">
                  <Product key={index} {...block.attrs.data} />
                </div>
              );
            default:
              return null;
          }
        default:
          return null;
      }
    });
  };

  useEffect(() => {
    if (document.title !== props.pageTitle) {
      document.title = props.pageTitle;
    }
  }, [props]);

  return (
    <>
      <div
        className="flex h-80 flex-col justify-end"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_DOTCMS_HOST}/dA/${
            props.image
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-2 bg-gray-800/65 px-4 py-2 text-white">
          <h1 className="text-4xl">{props.pageTitle || props.title}</h1>
          {props.author?.length ? (
            <p className="text-sm">
              By: {props.author[0].firstName} {props.author[0].lastName} on{" "}
              {new Date(props.publishDate).toLocaleDateString("en-US")}
            </p>
          ) : null}
        </div>
      </div>
      <div className="px-16 pb-8 pt-2">
        {props.tags?.length ? (
          <div className="mb-4 mt-2">
            {props.tags.split(",").map((tag: string) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        ) : null}
        {!!props.blogContent && renderContent(props.blogContent.content)}

        {!!props.body && (
          <div dangerouslySetInnerHTML={{ __html: props.body }} />
        )}
      </div>
    </>
  );
}
