import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import { documents } from '@/data'

export default function Documents() {
  const headline = 'Documents'
  const intro =
    'Here you can find a collection of essential documents that provide a comprehensive overview of our research projects. These documents serve as valuable resources, offering insights into the objectives, plans, and progress of our projects.'

  return (
    <>
      <SimpleLayout title={headline} intro={intro}>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {documents.map((project) => (
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
