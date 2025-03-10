import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Join the AI Revolution with
          <br />
          WalletWave
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Revolutionizing Crypto with Intelligent Innovation for Tomorrow’s Blockchain Solutions
        </p>
      </div>
      <div className="flex gap-4">
      <a href="https://github.com/buildstationorg/dotui">
  <Button size="lg">
    Deploy Now
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
</a>
<a href="https://github.com/buildstationorg/dotui/tree/main/docs">
<Button variant="outline" size="lg">
          Read our docs
        </Button>
</a>
        
      </div>
    </section>
  )
}