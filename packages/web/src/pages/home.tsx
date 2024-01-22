import { trpc } from "../utils/trpc";

export default function Home() {
  const users = trpc.users.useQuery();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.data?.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}
