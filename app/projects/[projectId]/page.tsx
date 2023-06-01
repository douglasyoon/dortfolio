import NotionComponent from '@/components/common/NotionComponent';
import notion from '@/lib/notion';

export default async function ProjectNotionPage({
  params,
}: {
  params: { projectId: string };
}) {
  const recordMap = await notion.getPage(params.projectId);
  return (
    <>
      <NotionComponent recordMap={recordMap} />
    </>
  );
}
