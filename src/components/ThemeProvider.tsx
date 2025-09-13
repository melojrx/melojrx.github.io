import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      themes={["light", "dark"]}
      defaultTheme="dark"
      enableSystem={false}
      attribute="class"
    >
      {children}
    </NextThemesProvider>
  );
}