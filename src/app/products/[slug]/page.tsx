import StubPage from "@/components/site/StubPage";
import { titleize } from "@/lib/title";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <StubPage eyebrow="Products" title={titleize(slug)} />;
}
