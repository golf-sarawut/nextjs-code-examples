import { Posts } from "@/components/Posts";

export default async function Page() {

    await fetch("https://jsonplaceholder.typicode.com/posts");
    await fetch("https://jsonplaceholder.typicode.com/posts");
    await fetch("https://jsonplaceholder.typicode.com/posts");
    await fetch("https://jsonplaceholder.typicode.com/posts");
    await fetch("https://jsonplaceholder.typicode.com/posts");

    return <div>
        <Posts/>
        <Posts/>
        <Posts/>
    </div>
}