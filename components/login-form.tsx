import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <>
      <form className={cn("flex flex-col gap-6", className)} {...props}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Chose a login method to access your account
          </p>
        </div>
        <div className="grid gap-3 py-4">
          {/* <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-3">
          <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <a
          href="#"
          className="ml-auto text-sm underline-offset-4 hover:underline"
          >
          Forgot your password?
          </a>
          </div>
          <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
          Login
          </Button>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
          Or continue with
          </span>
          </div> */}
          <Button variant="outline" className="w-full flex justify-center relative rounded-xl">

            <svg width="800px" height="800px" className="absolute left-4" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" /><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" /><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" /><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" /></svg>
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full flex justify-center relative rounded-xl">
            <svg width="800px" height="800px" viewBox="0 0 16 16" className="absolute left-4" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#F35325" d="M1 1h6.5v6.5H1V1z" /><path fill="#81BC06" d="M8.5 1H15v6.5H8.5V1z" /><path fill="#05A6F0" d="M1 8.5h6.5V15H1V8.5z" /><path fill="#FFBA08" d="M8.5 8.5H15V15H8.5V8.5z" /></svg>
            Continue with Microsoft
          </Button>
          <Button variant="outline" className="w-full flex justify-center relative rounded-xl">
            <svg width="800px" height="800px" viewBox="-3.5 0 48 48" className="absolute left-4 dark:invert" xmlns="http://www.w3.org/2000/svg">
              <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Color-" transform="translate(-204.000000, -560.000000)" fill="#0B0B0A">
                  <path d="M231.174735,567.792499 C232.740177,565.771699 233.926883,562.915484 233.497649,560 C230.939077,560.177808 227.948466,561.814769 226.203475,563.948463 C224.612784,565.88177 223.305444,568.757742 223.816036,571.549042 C226.613071,571.636535 229.499881,569.960061 231.174735,567.792499 L231.174735,567.792499 Z M245,595.217241 C243.880625,597.712195 243.341978,598.827022 241.899976,601.03692 C239.888467,604.121745 237.052156,607.962958 233.53412,607.991182 C230.411652,608.02505 229.606488,605.94498 225.367451,605.970382 C221.128414,605.99296 220.244696,608.030695 217.116618,607.999649 C213.601387,607.968603 210.913765,604.502761 208.902256,601.417937 C203.27452,592.79849 202.68257,582.680377 206.152914,577.298162 C208.621711,573.476705 212.515678,571.241407 216.173986,571.241407 C219.89682,571.241407 222.239372,573.296075 225.322563,573.296075 C228.313175,573.296075 230.133913,571.235762 234.440281,571.235762 C237.700215,571.235762 241.153726,573.022307 243.611302,576.10431 C235.554045,580.546683 236.85858,592.121127 245,595.217241 L245,595.217241 Z" id="Apple">
                  </path>
                </g>
              </g>
            </svg>
            Continue with Apple
          </Button>
          <Button variant="outline" className="w-full flex justify-center relative rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute left-4">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Continue with GitHub
          </Button>

        </div>
        <div className="text-center text-muted-foreground text-sm">
        By clicking continue, you agree to our{" "}
          <a href="#" className="underline underline-offset-4 text-foreground">
            Terms of Service
          </a>
          {" "}and{" "}
          <a href="#" className="underline underline-offset-4 text-foreground">
            Privacy Policy
          </a>
        </div>
      {/* <div className="text-center text-muted-foreground text-sm text-nowrap absolute bottom-0 left-1/2 transform -translate-x-1/2">
        &copy; {new Date().getFullYear()} Papelogy Inc. All rights reserved.
      </div> */}
      </form>

    </>
  )
}
