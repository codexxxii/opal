import PageHeader from "@/components/page-header";
import { auth } from "@clerk/nextjs/server";

export default async function GalleryPage() {
  await auth.protect();

  return (
    <div>
      <PageHeader title="Gallery" />
    </div>
  );
}
