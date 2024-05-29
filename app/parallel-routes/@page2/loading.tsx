export default async function Loading() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return <div> .... Component2 Loading ....</div>;
  }