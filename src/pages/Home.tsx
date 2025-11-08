export default function Home() {
  const token = localStorage.getItem("token");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to Greenhouse 🌿</h1>
      {token ? (
        <p className="mt-4 text-green-600">You are logged in!</p>
      ) : (
        <p className="mt-4 text-red-500">Not logged in</p>
      )}
    </div>
  );
}
