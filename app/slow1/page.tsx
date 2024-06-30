import { ExpensiveComponent } from "./components/expensiveComponent";

export default async function Page() {
  return (
    <main className="container mx-auto mt-[20px]">
      <ExpensiveComponent/>
    </main>
  );
}
