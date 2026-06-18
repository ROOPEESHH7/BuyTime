import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <Container>
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
          <nav className="flex flex-wrap gap-4">
            {siteConfig.nav.footer.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <Separator />
        <p className="py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
