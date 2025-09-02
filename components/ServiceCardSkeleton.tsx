import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      {Array.from({ length: 6 }, (_, i) => i + 1)?.map((id) => (
        <div key={id} className="flex flex-col gap-6 rounded-xl border p-6">
          <Skeleton className="w-[216px] aspect-4/3 rounded-t-xl bg-zinc-700" />
          <Skeleton className="h-8 w-full bg-zinc-700" />
          <Skeleton className="h-15 w-full bg-zinc-700" />
          <Skeleton className="h-10 w-20 bg-zinc-700" />
        </div>
      ))}
    </>
  );
}
