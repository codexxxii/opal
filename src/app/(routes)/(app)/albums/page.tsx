import CreateAlbumButton from "@/components/create-album-button";
import PageHeader from "@/components/page-header";
import { auth } from "@clerk/nextjs/server";

export default async function AlbumsPage() {
  await auth.protect();

  return (
    <div>
      <PageHeader title="Albums">
        <CreateAlbumButton />
      </PageHeader>
    </div>
  );
}
