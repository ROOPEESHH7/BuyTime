import { MainLayout } from "@/components/layout/main-layout";
import { Container } from "@/components/shared/container";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NotFound() {
  return (
    <MainLayout>
      <Container className="py-24">
        <Card className="mx-auto max-w-lg text-center">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">404</CardTitle>
            <CardDescription>Page not found</CardDescription>
          </CardHeader>
        </Card>
      </Container>
    </MainLayout>
  );
}
