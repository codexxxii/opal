import PageHeader from "@/components/page-header";
import { auth } from "@clerk/nextjs/server";

export default async function AddImagesPage() {
  await auth.protect();

  return (
    <div>
      <PageHeader title="Add Images" />
    </div>
  );
}
