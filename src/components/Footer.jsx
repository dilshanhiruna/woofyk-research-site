import Link from 'next/link'
import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-orange-600 dark:hover:text-orange-500"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/scope">Scope</NavLink>
                <NavLink href="/milestones">Milestones</NavLink>
                <NavLink href="/documents">Documents</NavLink>
                <NavLink href="/presentations">Presentations</NavLink>
                <NavLink href="/about">About</NavLink>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                &copy; {new Date().getFullYear()} Woofyk <sup>TM</sup>
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
