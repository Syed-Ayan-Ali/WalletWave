"use client"

import { Brain, Cloud, Shield, Zap } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import SigpassKit from "@/components/sigpasskit";

const features = [
  {
    name: "AI-Driven Analytics",
    description: "Leverage advanced algorithms to analyze market trends and make data-driven investment decisions.",
    icon: Brain,
  },
  {
    name: "Scalable Cloud Solutions",
    description: "Implement state-of-the-art security measures to safeguard your digital assets against threats and vulnerabilities.",
    icon: Cloud,
  },
  {
    name: "Robust Security Protocols",
    description: "State-of-the-art security measures to protect your most valuable assets.",
    icon: Shield,
  },
  {
    name: "Optimized Performance Metrics",
    description: "Achieve unparalleled performance with our high-speed systems, ensuring rapid transaction processing and minimal latency.",
    icon: Zap,
  },
]

export default function Features() {
  const [transactionStatus] = useState(null)
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false)

  return (
    <section id="wallet" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Wallet</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Unlock your digital world: Create and connect your wallet for seamless transactions!
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <SigpassKit />
        </div>
      </div>

      <div className="my-12"></div>


      {/* Transaction Status Dialog */}
      <Dialog open={isStatusDialogOpen} onOpenChange={setIsStatusDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Transaction Status</DialogTitle>
          </DialogHeader>
          <Alert>
            <AlertTitle>Status</AlertTitle>
            <AlertDescription>{transactionStatus || "No transaction submitted"}</AlertDescription>
          </Alert>
        </DialogContent>
      </Dialog>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

