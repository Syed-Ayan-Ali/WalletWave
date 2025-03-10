import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">DotAI</h2>
          <p className="text-sm text-muted-foreground">Pioneering software solutions for the digital age.</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/wallet" className="text-muted-foreground transition-colors hover:text-primary">
                  Wallet
                </Link>
              </li>
              <li>
                <Link href="/transaction" className="text-muted-foreground transition-colors hover:text-primary">
                  Send Transaction
                </Link>
              </li>
              <li>
                <Link href="/contract" className="text-muted-foreground transition-colors hover:text-primary">
                  Write Contract
                </Link>
              </li>
              <li>
                <Link href="/mint" className="text-muted-foreground transition-colors hover:text-primary">
                Mint/Redeem LST Bifrost
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="space-y-4">
            
            <ul className="space-y-3 text-sm">
              
            </ul>
          </div> */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/syed-ayan-ali"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>

              <Link
                href="https://linkedin.com/syed-ayan-ali"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} WalletWave, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

