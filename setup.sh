#!/bin/bash

echo ">>> Setting up project..."
echo ""

# Check if .env.local exists
if [ ! -f .env ]; then
  echo ">>> Creating .env from .env.example..."
  cp .env.example .env
  echo ">>> .env created"
else
  echo ">>>  .env already exists"
fi

echo ""
echo ">>> Starting Docker containers..."
bun run docker:up

echo ""
echo ">>> Waiting for PostgreSQL to be ready..."
sleep 5

echo ""
echo ">>>  Pushing database schema..."
bun run db:push

echo ""
echo ">>> Setup complete!"
echo ""
echo ">>> Next steps:"
echo "  1. Access MinIO Console at http://localhost:9001"
echo "     - Username: minioadmin"
echo "     - Password: minioadmin123"
echo "  2. Create a bucket named 'nextjs-uploads'"
echo "  3. Update BETTER_AUTH_SECRET in .env"
echo "  4. Run 'bun run dev' to start the development server"
echo ""
