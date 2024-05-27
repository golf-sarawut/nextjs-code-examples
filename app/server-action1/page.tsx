/**
 * We are sending this to Webdis API
 * Please make sure you have the Webdis API running
 * By running docker compose up
 * This will expose the Webdis API on port 7379
 * And open http rest api on port 7379
 */
export default function Page() {

    async function submit(formData: FormData) {
        "use server"
        
        const API_ENDPOINT: string = process.env.WEBDIS_API_ENDPOINT!

        console.log("Server action");

        fetch(API_ENDPOINT, {
            method: 'POST',
            body: `SET/${formData.get('key')}/${formData.get('value')}`
        })
    }

    return <main className="container mt-[20px]">
        <form id="form-redis" action={submit} className="mx-auto w-[300px] flex flex-col gap-y-[12px]">
            <label>Key</label>
            <input type="text" name="key" className="text-black"/>            
            <label>Value</label>
            <input type="text" name="value" className="text-black" />
            <input type="submit" value="Submit" className="cursor-pointer bg-blue-500 rounded-full py-[5px]" />
        </form>
    </main>
}