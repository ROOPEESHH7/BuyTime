"use client";

import { useEffect } from "react";

import { MainLayout } from "@/components/layout/main-layout";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <MainLayout>
      <Container className="py-24">
        <Card className="mx-auto max-w-lg text-center">
          <CardHeader>
            <CardTitle>Something went wrong</CardTitle>
            <CardDescription>
              An unexpected error occurred. Please try again.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={reset}>Try again</Button>
          </CardContent>
        </Card>
      </Container>
    </MainLayout>
  );
}
