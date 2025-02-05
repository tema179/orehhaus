import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, noBorder, noOutline, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        !noBorder && "border border-input bg-background",
        !noOutline && "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      ref={ref}
      {...props}
    />
  );
})

Input.displayName = "Input"

export { Input }
