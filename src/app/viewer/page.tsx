import DeletButton from "@/components/delete-button";
import { list } from "@vercel/blob";

export default async function Viewer() {
  const { blobs } = await list();
  return (
    <>
      <h1>Viewer Component</h1>
      <ul>
        {blobs.map((blob) => {
          return (
            <li key={blob.pathname}>
              {blob.pathname} - <DeletButton url={blob.url} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
