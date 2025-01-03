export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return <div>{slug}</div>;
}
