import { LoginForm } from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <h1 className="text-3xl">Sign In</h1>
        <LoginForm />
      </div>
    </main>
  );
}
