"use client";

import { useRouter } from "next/navigation";

export default function DeletButton({ url }: { url: string }) {
  const router = useRouter();
  return (
    <>
      <button
        onClick={async () => {
          await fetch("/api/avatar/upload", {
            method: "DELETE",
            body: JSON.stringify({ url }),
          });
          router.refresh();
        }}
      >
        Delete
      </button>
    </>
  );
}
