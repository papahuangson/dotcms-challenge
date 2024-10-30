import { useNavigate } from "react-router-dom";
import { DotCMSContentlet } from "types";

function Product({
  identifier,
  image,
  title,
  salePrice,
  retailPrice,
  url,
}: DotCMSContentlet) {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      aria-label={`View product details for ${title}`}
      onClick={() => navigate(url)}
      key={identifier}
      title={title}
      className={`embla_slide w-max-60 group flex h-72 flex-col items-center justify-between rounded-lg border-0 border-b border-b-slate-100 shadow-lg first:ml-12 hover:border-blue-300 hover:shadow-gray-300`}
    >
      <img
        src={`${import.meta.env.VITE_DOTCMS_HOST}${image}}`}
        onError={(e) => {
          e.currentTarget.src = "http://loremflickr.com/300/300/";
        }}
        className="mb-4 w-52 rounded-t-lg"
        alt={title}
      />
      <div className="flex w-60 grow flex-col justify-center rounded-b-lg px-2 text-base group-hover:bg-slate-50">
        <h3 className="truncate text-base font-semibold" aria-label={title}>
          {title}
        </h3>
        <div className="flex flex-row items-center gap-1">
          {salePrice && (
            <span className="font-semibold text-green-700">${salePrice}</span>
          )}
          <span className={salePrice ? "line-through" : ""}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(retailPrice)}
          </span>
          {!!salePrice && (
            <span>
              ({Math.round(((retailPrice - salePrice) / retailPrice) * 100)}
              {"% "}
              off)
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
