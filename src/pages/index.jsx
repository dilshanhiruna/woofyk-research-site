import Image from 'next/future/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import { components } from '@/data'

import image3 from '@/images/home/c3.png'
import image2 from '@/images/home/c2.png'
import image1 from '@/images/home/c1.png'
import image5 from '@/images/home/c5.png'
import image4 from '@/images/home/c4.png'
import imageHome from '@/images/home/home.jpg'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-contain p-5"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl text-lg">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Smart caring system for domestic dogs
          </h1>
          <p className="prose mt-6 dark:prose-invert">
            Enhancing Canine Well-being through Innovative Technologies for Dog
            Breed Identification, Personalized Meal Plans, Disease Recognition,
            and Real-time Remote Monitoring
          </p>
          <p className="prose mt-6 dark:prose-invert">
            Harnessing Convolutional Neural Networks, Reinforcement Learning,
            Artificial Neural Networks, and Internet of Things (IoT) to Improve
            the Quality of Life for Dogs and their Owners
          </p>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-8xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Woo<span className="text-red-500">fyk</span>
          </h1>
          <span className="text-md mt-2 font-medium  text-zinc-800 dark:text-zinc-100 sm:text-lg">
            The Dog Care App
          </span>

          <p className=" prose m-12  text-lg dark:prose-invert">
            Woofyk mobile application, the ultimate companion for dog owners!
            Our innovative app brings together cutting-edge technologies to
            enhance the well-being of your furry friends. With our app, you can
            unlock a world of possibilities:
          </p>

          {components.map((component) => (
            <div
              key={component.name}
              className="m-5 rounded-2xl border border-zinc-100 p-6 transition-colors duration-300 hover:bg-zinc-100 dark:border-zinc-700/40 dark:hover:bg-zinc-700/40"
            >
              <h2 className="mb-2 text-lg font-medium tracking-tight text-zinc-800 dark:text-zinc-100 ">
                {component.name}
              </h2>
              <p className=" prose mx-12  text-lg dark:prose-invert">
                {component.description}
              </p>
            </div>
          ))}

          <Image
            src={imageHome}
            alt="Mobile Application"
            className="mt-20 h-auto w-auto"
            width={300}
            height={400}
            style={{ borderRadius: 20 }}
          />
        </div>
      </Container>
    </>
  )
}
