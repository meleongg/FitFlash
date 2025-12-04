"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { usePathname } from "next/navigation";

export function ConditionalThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // List of paths where theme provider should NOT be applied
  const authPaths = ["/sign-in", "/sign-up", "/forgot-password"];

  // Check if current path is an auth page
  const isAuthPage = authPaths.some((path) => pathname?.startsWith(path));

  // If it's an auth page, just return children without ThemeProvider
  if (isAuthPage) {
    return <>{children}</>;
  }

  // Otherwise, wrap with ThemeProvider
  return <ThemeProvider>{children}</ThemeProvider>;
}
