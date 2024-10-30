export default function Image({
  fileAsset,
  title,
  description,
}: {
  fileAsset: any;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded bg-white shadow-lg">
      <div className="relative h-96 w-full bg-gray-200">
        {fileAsset && (
          <img
            src={fileAsset?.idPath ?? fileAsset}
            className="size-full object-cover"
            alt={title}
          />
        )}
      </div>
      <div className="absolute bottom-0 w-full translate-y-full bg-orange-500/80 px-6 py-8 text-white transition-transform duration-300 group-hover:translate-y-0">
        <div className="mb-2 text-2xl font-bold">{title}</div>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
}
