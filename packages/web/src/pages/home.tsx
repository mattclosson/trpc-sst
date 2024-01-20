import { trpc } from "../utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery("Matthew");

  const users = trpc.users.useQuery();

  return (
    <div>
      <h1>{hello.data}</h1>
      {users.data}
    </div>
  );
}
