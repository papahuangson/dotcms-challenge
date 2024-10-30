export default function WebPageContent({ body }: { body: string }) {
  return (
    <div className="my-10 rounded-lg border border-b-4 border-b-slate-100 px-8 pb-4 pt-2 shadow-lg">
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}
