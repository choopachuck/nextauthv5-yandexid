import { doSocialLogin } from "@/actions";

export const LoginForm = () => {
  return (
    <form action={doSocialLogin}>
      <button
        className="bg-yellow-500 text-black p-1 rounded-md text-lg"
        name="action"
        value="yandex"
        type="submit"
      >
        Sign with Yandex
      </button>
    </form>
  );
};
