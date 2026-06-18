"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type MotionDivProps = HTMLMotionProps<"div">;

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const fadeInTransition = {
  duration: 0.3,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

export function FadeIn({
  className,
  children,
  delay = 0,
  ...props
}: MotionDivProps & { delay?: number }) {
  return (
    <motion.div
      className={cn(className)}
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      exit={fadeIn.exit}
      transition={{ ...fadeInTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({
  className,
  children,
  stagger = 0.1,
  ...props
}: MotionDivProps & { stagger?: number }) {
  return (
    <motion.div
      className={cn(className)}
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({ className, children, ...props }: MotionDivProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        initial: fadeIn.initial,
        animate: fadeIn.animate,
      }}
      transition={fadeInTransition}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleOnHover({
  className,
  children,
  scale = 1.02,
  ...props
}: MotionDivProps & { scale?: number }) {
  return (
    <motion.div
      className={cn(className)}
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
