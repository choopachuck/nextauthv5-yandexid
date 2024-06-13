import { doLogout } from "@/actions";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl">{session.user.email}</h1>
        <h1 className="text-3xl">{session.user.image ?? "No image"}</h1>
        <h1 className="text-3xl">{session.user.id ?? "No id"}</h1>
        <h1 className="text-3xl">{session.user.name}</h1>
        <h1 className="text-3xl">{session.expires}</h1>
        <form action={doLogout}>
          <button
            className="bg-yellow-500 text-black p-1 rounded-md text-lg"
            name="action"
            value="yandex"
            type="submit"
          >
            LogOut
          </button>
        </form>
      </div>
    </main>
  );
};

export default HomePage;
