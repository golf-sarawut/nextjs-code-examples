import dynamic from "next/dynamic";

const InvalidHtmlNoSSR = dynamic(
  () => import("../../components/InvalidHtml").then((mod) => mod.InvalidHtml),
  { ssr: false }
);

export default function Page() {
  return (
    <main>
      <InvalidHtmlNoSSR />
    </main>
  );
}
