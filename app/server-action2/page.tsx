export default function Page() {
    
  async function submit() {
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  return (
    <main className="container mt-[20px]">
      <form action={submit} className="w-[30px]">
        <input
          type="submit"
          value="Submit"
          className="cursor-pointer bg-blue-500 rounded-full py-[5px]"
        />
      </form>
    </main>
  );
}
