import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { shadcn } from '@clerk/themes'

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshi.variable} antialiased`}
      >
        <ClerkProvider
          appearance={{
            baseTheme: shadcn,
          }}>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
