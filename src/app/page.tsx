import Link from "next/link";
import SiteHeader from "@/components/site-header";

const GITHUB_REPO = "https://github.com/faksul/nextjs-template.git";

export default function Home() {
  return (
    <>
    <SiteHeader />
    <div className="min-h-screen bg-linear-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <Link
              href={GITHUB_REPO}
              target="_blank"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary border shadow-xs transition hover:opacity-90"
            >
              <svg viewBox="0 0 1024 1024" fill="none" className="size-5">
                <title>GitHub</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                  fill="#1B1F23"
                />
              </svg>
              <span className="text-sm font-medium">Give a Star</span>
            </Link>

            <h1 className="text-5xl font-bold tracking-tight">
              Next.js Starter Template
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              A full-stack starter built on Next.js with PostgreSQL, MinIO,
              Drizzle, and Better Auth.
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h3 className="font-semibold mb-2">Next.js 16</h3>
              <p className="text-sm text-muted-foreground">
                App Router with React 19
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h3 className="font-semibold mb-2">PostgreSQL</h3>
              <p className="text-sm text-muted-foreground">
                Relational database
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h3 className="font-semibold mb-2">Drizzle ORM</h3>
              <p className="text-sm text-muted-foreground">
                Type-safe database toolkit
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h3 className="font-semibold mb-2">MinIO (S3)</h3>
              <p className="text-sm text-muted-foreground">Object storage</p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h3 className="font-semibold mb-2">Better Auth</h3>
              <p className="text-sm text-muted-foreground">
                Authentication solution
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h3 className="font-semibold mb-2">TanStack Query</h3>
              <p className="text-sm text-muted-foreground">
                Data fetching & caching
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h3 className="font-semibold mb-2">Tailwind CSS</h3>
              <p className="text-sm text-muted-foreground">
                Utility-first styling
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h3 className="font-semibold mb-2">shadcn/ui</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful components
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h3 className="font-semibold mb-2">Biome</h3>
              <p className="text-sm text-muted-foreground">
                Fast linting & formatting
              </p>
            </div>
          </div>

          {/* Getting Started */}
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <ol className="space-y-2 text-muted-foreground">
              <li>
                Start Docker services:{" "}
                <code className="px-2 py-1 bg-muted rounded text-sm">
                  bun run docker:up
                </code>
              </li>
              <li>
                Push database schema:{" "}
                <code className="px-2 py-1 bg-muted rounded text-sm">
                  bun run db:push
                </code>
              </li>
              <li>
                Create MinIO bucket at{" "}
                <a
                  href="http://localhost:9001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  localhost:9001
                </a>
              </li>
              <li>Check the README.md for detailed instructions</li>
            </ol>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
