"use client";

import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/auth/client";

export default function Register() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await signUp.email(
      { name, email, password },
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
        <Label htmlFor="email">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
      </div>
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
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="*******"
          autoComplete="new-password"
        />
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? <Loader2Icon className="animate-spin" /> : "Register"}
      </Button>
    </form>
  );
}
