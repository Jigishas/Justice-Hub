import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-[#2a4d69] text-white hover:bg-[#1e3a52] shadow-md hover:shadow-lg",
        destructive:
          "bg-[#e74c3c] text-white hover:bg-[#c0392b] focus-visible:ring-[#e74c3c]/20 shadow-md hover:shadow-lg",
        outline:
          "border-2 border-[#2a4d69] bg-transparent text-[#2a4d69] hover:bg-[#2a4d69] hover:text-white shadow-sm hover:shadow-md dark:border-[#4b86b4] dark:text-[#4b86b4] dark:hover:bg-[#4b86b4] dark:hover:text-white",
        secondary:
          "bg-[#4b86b4] text-white hover:bg-[#3a6b8f] shadow-md hover:shadow-lg",
        ghost:
          "hover:bg-[#e7eff6] hover:text-[#2a4d69] dark:hover:bg-[#1a2a3a] dark:hover:text-[#4b86b4]",
        link: "text-[#2a4d69] underline-offset-4 hover:underline dark:text-[#4b86b4]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
