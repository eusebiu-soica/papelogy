import { ArrowRight, CheckCircle, Users, Calendar, BarChart3, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PersonalDashboardPreview } from "@/components/personal-dashboard-preview"
import PersonalProductivitySection from "@/components/personal-productivity-section"
import { title } from "process"

export const metadata ={
  title: "Papelogy - Personal Productivity Platform",
  description: "Manage your time, tasks, and projects with Papelogy. A complete platform for personal productivity and team collaboration.",
}
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <div className="flex items-center justify-center">
          <CheckCircle className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">Papelogy</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#pricing">
            Pricing
          </a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">
            About
          </a>
        </nav>
        <div className="ml-4 flex gap-2">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  <Zap className="w-3 h-3 mr-1" />
                  Nou: Integrare AI pentru task-uri inteligente
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Controlează-ți timpul cu <span className="text-primary">Papelogy</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Platforma completă pentru productivitate personală și colaborare în echipă. Gestionează-ți timpul,
                  task-urile și proiectele într-un singur loc.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="h-12 px-8">
                  Începe gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 bg-transparent">
                  Vezi demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Fără card de credit • Setup în 2 minute • Suport 24/7</p>
            </div>
          </div>
        </section>

        {/* Personal Dashboard Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Dashboard-ul tău personal de productivitate
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Totul într-un singur loc: task-uri, obiective, obiceiuri și time tracking. Vezi cum arată o zi
                organizată cu Papelogy.
              </p>
            </div>
            <div className="mx-auto max-w-7xl mt-12">
              <div className="relative bg-muted/30 rounded-xl p-1">
                <PersonalDashboardPreview />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tot ce ai nevoie pentru succes
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Funcționalități puternice care se adaptează nevoilor echipei tale, de la startup-uri la corporații.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center text-center p-6">
                <CardHeader>
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Time Management Personal</CardTitle>
                  <CardDescription>
                    Planifică-ți ziua, urmărește timpul petrecut pe task-uri și optimizează-ți rutina zilnică.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Colaborare în echipă</CardTitle>
                  <CardDescription>
                    Sincronizează-te cu echipa, distribuie task-uri și urmărește progresul proiectelor comune.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Insights și productivitate</CardTitle>
                  <CardDescription>
                    Analizează-ți obiceiurile, identifică blocajele și îmbunătățește-ți constant performanța.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Personal Productivity Section */}
        <PersonalProductivitySection />

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-3xl font-bold text-primary">50K+</h3>
                <p className="text-muted-foreground">Echipe active</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-3xl font-bold text-primary">2M+</h3>
                <p className="text-muted-foreground">Task-uri completate</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-3xl font-bold text-primary">99.9%</h3>
                <p className="text-muted-foreground">Uptime garantat</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-3xl font-bold text-primary">24/7</h3>
                <p className="text-muted-foreground">Suport tehnic</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ce spun clienții noștri</h2>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    "Papelogy m-a ajutat să îmi organizez viața personală și să fiu mai eficient la muncă. Acum știu
                    exact unde îmi petrec timpul."
                  </p>
                  <div className="flex items-center space-x-2">
                    <img src="/placeholder.svg?height=40&width=40" alt="Avatar" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold">Alexandra Marin</p>
                      <p className="text-sm text-muted-foreground">Freelancer & Consultant</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    "Perfect pentru echipa noastră hibridă. Fiecare își gestionează task-urile personal, dar colaborăm
                    seamless pe proiecte."
                  </p>
                  <div className="flex items-center space-x-2">
                    <img src="/placeholder.svg?height=40&width=40" alt="Avatar" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold">Mihai Popescu</p>
                      <p className="text-sm text-muted-foreground">Team Lead, DigitalCorp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    "Am trecut de la haos total la o rutină organizată. Papelogy îmi arată exact unde să îmi concentrez
                    energia."
                  </p>
                  <div className="flex items-center space-x-2">
                    <img src="/placeholder.svg?height=40&width=40" alt="Avatar" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold">Ioana Radu</p>
                      <p className="text-sm text-muted-foreground">Antreprenor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Planuri pentru orice echipă
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Începe gratuit și crește odată cu echipa ta. Fără costuri ascunse.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect pentru echipe mici</CardDescription>
                  <div className="text-3xl font-bold">Gratuit</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Până la 5 membri
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />3 proiecte active
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Suport email
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Începe gratuit</Button>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2">Cel mai popular</Badge>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>Pentru echipe în creștere</CardDescription>
                  <div className="text-3xl font-bold">
                    49 RON
                    <span className="text-sm font-normal text-muted-foreground">/lună</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Membri nelimitați
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Proiecte nelimitate
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Analiză avansată
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Suport prioritar
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Alege Professional</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Pentru organizații mari</CardDescription>
                  <div className="text-3xl font-bold">Custom</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Toate funcționalitățile
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      SSO și securitate avansată
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Account manager dedicat
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full mt-6 bg-transparent">
                    Contactează-ne
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Gata să îți iei controlul asupra timpului?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Alătură-te celor care și-au transformat productivitatea cu Papelogy - pentru tine și echipa ta.
              </p>
              <div className="space-x-4">
                <Button size="lg" variant="secondary" className="h-12 px-8">
                  Începe gratuit astăzi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-primary" />
          <span className="ml-2 font-semibold">Papelogy</span>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Termeni de utilizare
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Politica de confidențialitate
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
        <p className="text-xs text-muted-foreground">© 2024 Papelogy. Toate drepturile rezervate.</p>
      </footer>
    </div>
  )
}
