"use server";

export async function delay5Seconds() {
  // Mimic a long running server action
  await new Promise((resolve) => setTimeout(resolve, 5000));
}
