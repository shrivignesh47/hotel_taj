import { cn } from "../../lib/utils";

export const AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={{
        "--shiny-width": `${shimmerWidth}px`, // Ensure this variable is defined
      }}
      className={cn(
        "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",
        // Shine effect
        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%]",
        // Shine gradient
        "bg-gradient-to-r from-transparent via-[#FFD700] to-transparent dark:via-[#FFD700]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
