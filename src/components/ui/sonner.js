"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";
const Toaster = ({ ...props }) => {
    const { theme = "system" } = useTheme();
    /*
    • The new build failures come from imports like @radix-ui/react-select@2.1.6, @radix-ui/react-slot@1.1.2, etc.—they include version numbers in the module path.
      Node and Vite expect just @radix-ui/react-select, so the version suffix makes the module impossible to resolve.
    
      Here’s what to do:
    
      1. Update every shadcn-generated component so the imports drop the version suffixes. For example:
    
         // Wrong
         import * as SelectPrimitive from "@radix-ui/react-select@2.1.6";
    
         // Correct
         import * as SelectPrimitive from "@radix-ui/react-select";
      2. While you’re there, switch the icon imports to plain lucide-react like this:
    
         import { Check, ChevronDown, ChevronUp } from "lucide-react";
    
         The same idea applies to button.tsx (use @radix-ui/react-slot), label.tsx, sonner.tsx, and so on.
      3. After saving the files, install the packages so they’re in node_modules:
    
         npm install @radix-ui/react-select @radix-ui/react-slot @radix-ui/react-label class-variance-authority tailwind-merge
      4. Then rerun the build:
    
         npm run build
    
      With those clean imports and the modules installed, Vite will compile without the resolution errors. Let me know when the build completes—you’ll see a “Build
      completed in…” message from Vite.
    */
    return (_jsx(Sonner, { theme: theme, className: "toaster group", style: {
            "--normal-bg": "var(--popover)",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)",
        }, ...props }));
};
export { Toaster };
//# sourceMappingURL=sonner.js.map