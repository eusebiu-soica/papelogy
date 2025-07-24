// app/login/page.tsx
import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form" // Nu este folosit, poți șterge importul dacă nu ai nevoie
import Animation from "@/components/ui/animation" // Nu este folosit dacă e comentat, poți șterge importul
import { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    default: "Login",
    template: `%s - Papelogy`,
  },
};

export default function LoginPage() {
  return (
    // Utilizează flexbox pentru întregul container și centrează conținutul
    // Pe mobile, `min-h-svh` asigură că este înalt cât viewport-ul.
    // `items-center` și `justify-center` centrează vertical și orizontal.
    // `lg:grid-cols-2` va suprarescrie acest comportament pe ecrane mari.
    <div className="flex min-h-svh items-center justify-center p-6 md:p-10 lg:grid lg:grid-cols-2">
      {/* Prima coloană (conținut login) */}
      <div className="flex flex-col gap-4 items-center lg:items-start justify-center text-center lg:text-left"> {/* Added items-center/start and text-center/left */}
        {/* Logo-ul */}
        <div className="flex justify-center gap-2 lg:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Papelogy Inc.
          </a>
        </div>
        {/* Containerul pentru SignIn */}
        <div className="w-full mt-8"> {/* Adaugă un margin-top pentru spațiere */}
          <SignIn appearance={{
              elements: {
                card: "shadow-none", // Remove default card shadow if you want to use your own background/styling
                footer: "hidden", // Hide clerk default footer if you want to add your own, or just remove
              },
              layout:{

                unsafe_disableDevelopmentModeWarnings: true
              }
            }}
            fallbackRedirectUrl="/dashboard" />
        </div>
      </div>

      <div className="relative hidden lg:block m-6 ms-0 me-40">
        <Animation />
      </div>
    </div>
  )
}