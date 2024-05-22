import { FiveSecondToLoad } from "@/components/FiveSecondToLoad";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="container mx-auto mt-[20px]">
      <Suspense fallback={<div>Loading....</div>}>
        <FiveSecondToLoad/>
      </Suspense>
    </main>
  );
}
