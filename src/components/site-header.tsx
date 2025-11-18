"use client";

import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth/client";
import { Button } from "./ui/button";

export default function SiteHeader() {
  const router = useRouter();
  const { data: session } = useSession();


  return (
    <header className="p-2 h-14 bg-accent border-b">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <div className="py-1 px-2.5 bg-primary text-primary-foreground rounded-md">
          N
        </div>
        <div>
          {session ? (
            <div className="flex">
              <Button onClick={() => router.push("/logout")} >
                Logout
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              <Button
                onClick={() => {
                  // Implement your sign in logic here
                  router.push("/login");
                }}
                className="w-full"
              >
                Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
