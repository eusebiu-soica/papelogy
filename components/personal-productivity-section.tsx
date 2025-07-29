import { Clock, Target, TrendingUp, Brain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PersonalProductivitySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Productivitate personală la următorul nivel
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Papelogy nu e doar despre task-uri. E despre cum îți gestionezi timpul, energia și atenția pentru rezultate
            maxime.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Clock className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Time Tracking Inteligent</h3>
                <p className="text-muted-foreground">
                  Urmărește automat timpul petrecut pe fiecare activitate și descoperă unde îți "dispare" ziua.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Target className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Obiective Personale</h3>
                <p className="text-muted-foreground">
                  Setează obiective pe termen scurt și lung, urmărește progresul și celebrează victoriile.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <TrendingUp className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Analiză de Productivitate</h3>
                <p className="text-muted-foreground">
                  Rapoarte detaliate despre obiceiurile tale de lucru și sugestii pentru îmbunătățire.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Brain className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Focus Sessions</h3>
                <p className="text-muted-foreground">
                  Tehnici Pomodoro integrate, blocare distracții și sesiuni de deep work planificate.
                </p>
              </div>
            </div>
          </div>

          <Card className="p-6">
            <CardHeader>
              <CardTitle>Rutina ta zilnică optimizată</CardTitle>
              <CardDescription>Vezi cum arată o zi productivă cu Papelogy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm">09:00 - Morning Planning</span>
                <span className="text-xs text-muted-foreground">15 min</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                <span className="text-sm">09:15 - Deep Work Session</span>
                <span className="text-xs text-muted-foreground">2h</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm">11:30 - Team Sync</span>
                <span className="text-xs text-muted-foreground">30 min</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                <span className="text-sm">12:00 - Project Tasks</span>
                <span className="text-xs text-muted-foreground">1.5h</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm">15:00 - Review & Planning</span>
                <span className="text-xs text-muted-foreground">20 min</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
