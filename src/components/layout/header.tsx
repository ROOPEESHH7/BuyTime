import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            {siteConfig.name}
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {siteConfig.nav.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
