import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  spacing?: "sm" | "md" | "lg";
};

const spacingClasses = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
};

export function Section({
  className,
  spacing = "md",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(spacingClasses[spacing], className)}
      {...props}
    />
  );
}
