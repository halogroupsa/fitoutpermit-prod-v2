import { ResourcesArchivePage, resourcesArchiveMetadata } from "@/components/resources-archive-page";

export const metadata = resourcesArchiveMetadata();

export default function ResourcesIndex() {
  return <ResourcesArchivePage />;
}
