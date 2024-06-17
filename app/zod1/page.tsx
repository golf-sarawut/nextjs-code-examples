import dynamic from "next/dynamic";

const UserForm = dynamic(() => import('@/components/UserForm'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },)

export default function Page() {
  return <UserForm />;
}
