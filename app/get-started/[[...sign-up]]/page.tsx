// app/login/page.tsx
import { GalleryVerticalEnd } from "lucide-react"
import { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    default: "Get Started",
    template: `%s - Papelogy`,
  },
};

export default function LoginPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6">
      <div className="flex justify-center gap-2 lg:justify-start">
        <a href="#" className="flex items-center gap-2 font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Papelogy Inc.
        </a>
      </div>
      <SignUp appearance={{
        elements: {
          card: "shadow-none", // Remove default card shadow if you want to use your own background/styling
          // footer: "hidden", // Hide clerk default footer if you want to add your own, or just remove
        },
        layout: {

          unsafe_disableDevelopmentModeWarnings: true
        }
      }}
        signInUrl="/sign-in"
        afterSignInUrl={"/dashboard/"}
        afterSignUpUrl={"/dashboard/"}

        fallbackRedirectUrl="/dashboard/" />
    </div>
  )
}