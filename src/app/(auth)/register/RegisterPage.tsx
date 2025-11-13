import Link from "next/link";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="w-full space-y-8 max-w-sm">
      <div className="text-center">
        <h1 className="text-xl font-semibold">Create an account</h1>
        <p className="text-muted-foreground">Enter your details </p>
      </div>
      <RegisterForm />
      <div className="text-center">
        <p className="text-muted-foreground text-sm text-center">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
