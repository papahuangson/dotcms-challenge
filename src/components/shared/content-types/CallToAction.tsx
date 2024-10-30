import { Link } from "react-router-dom";

function CallToAction({
  title,
  subHeading,
  buttonText1,
  buttonUrl1,
  buttonText2,
  buttonUrl2,
}: {
  title: string;
  subHeading: string;
  buttonText1: string;
  buttonUrl1: string;
  buttonText2: string;
  buttonUrl2: string;
}) {
  return (
    <div className="flex size-full flex-col justify-center rounded-xl bg-gradient-to-r from-blue-900 to-violet-800 p-8">
      <h2 className="mb-2 block text-5xl font-semibold leading-snug tracking-normal text-blue-900 antialiased">
        {title}
      </h2>
      <div
        className="mb-8 line-clamp-3 block text-2xl font-normal leading-relaxed antialiased"
        dangerouslySetInnerHTML={{ __html: subHeading }}
      />

      <div className="flex w-full gap-5">
        {buttonText1 && buttonUrl1 && (
          <Link
            className="rounded-lg bg-purple-500 px-6 py-4 text-xl font-semibold text-white"
            to={buttonUrl1}
          >
            {buttonText1}
          </Link>
        )}
        {buttonText2 && buttonUrl2 && (
          <Link
            className="rounded-lg bg-yellow-500 px-6 py-4 text-xl font-semibold text-white"
            to={buttonUrl2}
          >
            {buttonText2}
          </Link>
        )}
      </div>
    </div>
  );
}

export default CallToAction;
