import { MainLayout } from "@/components/layout/main-layout";
import { LoadingScreen } from "@/components/shared/spinner";

export default function Loading() {
  return (
    <MainLayout>
      <LoadingScreen />
    </MainLayout>
  );
}
