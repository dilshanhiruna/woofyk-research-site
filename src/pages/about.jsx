import Image from 'next/future/image'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'

import { members } from '@/data'

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="prose text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400">
          <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Our Team
          </h1>
          <p className="mt-6 text-center">
            Here you can get to know the dedicated and talented members of our
            research team. We are a group of passionate individuals who share a
            common goal of advancing knowledge and making a positive impact
            through our research projects.
          </p>
        </div>
      </Container>
      <SimpleLayout>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {members.map((member) => (
            <div
              key={member.name}
              className="group relative flex flex-col items-center"
            >
              <div className="relative z-10 flex items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={member.image}
                  alt=""
                  className="h-32 w-32 rounded-full object-cover object-center"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={member.link.href}>{member.name}</Card.Link>
              </h2>
              <p className="z-20 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {member.title}
              </p>
              <p className="z-20 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {member.email}
              </p>
            </div>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
