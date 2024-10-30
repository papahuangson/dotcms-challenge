export default function Tag({ tag }: { tag: string }) {
  return (
    <div className="mr-2 inline-block rounded-lg border border-gray-400 bg-gray-200 px-2 py-0.5 text-xs">
      {tag}
    </div>
  );
}
