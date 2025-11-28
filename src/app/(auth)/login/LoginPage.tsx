import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="w-full space-y-8 max-w-sm">
      <div className="text-center">
        <h1 className="text-xl font-semibold">Welcome Back</h1>
        <p className="text-muted-foreground">Log into your account </p>
      </div>
      <LoginForm />
      <div className="text-center">
        <p className="text-muted-foreground text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
