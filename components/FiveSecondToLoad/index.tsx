export async function FiveSecondToLoad() {
  
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <div>This component has rendered after five seconds</div>;
}
