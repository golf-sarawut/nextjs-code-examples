"use client";
import { delay5Seconds } from "@/actions/delayAction";

export default function Page() {
  return (
    <main className="container m-[20px]">
      <form action={delay5Seconds}>
        <button
          type="submit"
          className="disabled:bg-gray-600 disabled:cursor-default cursor-pointer bg-blue-500 rounded-full py-[10px] px-[15px] w-[100px]"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
