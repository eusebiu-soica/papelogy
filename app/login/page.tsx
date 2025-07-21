import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form"
import Animation from "@/components/ui/animation"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Login",
    template: `%s - Papelogy`,
  },
};


export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Papelogy Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center relative">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block m-6 ms-0 me-40">
        {/* <img
          src="/login-animation.svg"
          alt="Image"
          className="absolute inset-0 h-full rounded-3xl w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
        {/* <Lottie animationData={animation} loop={true}
          className="absolute inset-0 h-full rounded-3xl w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
        <Animation />
      </div>
    </div>
  )
}
