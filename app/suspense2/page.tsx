export default async function Page() {
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    return (
      <main className="container mx-auto mt-[20px]">
          <h1>Hi</h1>
      </main>
    );
  }
  