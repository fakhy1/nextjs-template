"use client";

import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/auth/client";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await signIn.email(
      { email, password },
      {
        onSuccess: () => {
          router.replace("/");
        },
        onError: ({ error }) => {
          alert(error.message);
        },
      },
    );

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link href="#" className="text-sm text-center underline">
            Forget Password
          </Link>
        </div>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="*******"
          autoComplete="new-password"
        />
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? <Loader2Icon className="animate-spin" /> : "Login"}
      </Button>
    </form>
  );
}
