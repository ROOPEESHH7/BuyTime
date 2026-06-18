import { MainLayout } from "@/components/layout/main-layout";
import { Container } from "@/components/shared/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <MainLayout>
      <Container className="py-24">
        <Card className="mx-auto max-w-lg text-center">
          <CardHeader>
            <CardTitle className="text-2xl">BuyTime</CardTitle>
            <CardDescription>
              Your e-commerce platform is ready for development.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Configure your environment variables, run database migrations, and
            start building pages.
          </CardContent>
        </Card>
      </Container>
    </MainLayout>
  );
}
