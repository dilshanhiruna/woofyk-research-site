import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import { presentations } from '@/data'

export default function Presentations() {
  const headline = 'Presentations'
  const intro =
    'Here you can explore the various presentations we have delivered throughout our research journey. These presentations serve as crucial moments for sharing our progress, concepts, and achievements with the audience, including the project panel and our supervisor.'

  return (
    <>
      <SimpleLayout title={headline} intro={intro}>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {presentations.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  src={project.logo.src}
                  alt=""
                  className="h-8 w-8"
                  loading="lazy"
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
