import Image from 'next/future/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import problemImage from '@/images/scope/problem.png'
import objectiveImage from '@/images/scope/objective.png'
import solutionImage from '@/images/scope/solution.png'
import systemImage from '@/images/scope/system.png'

import reactImage from '@/images/scope/tech-icons/react.svg'
import flaskImage from '@/images/scope/tech-icons/flask.png'
import piImage from '@/images/scope/tech-icons/pi.png'
import pythonImage from '@/images/scope/tech-icons/python.png'
import expoImage from '@/images/scope/tech-icons/expo.png'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 mx-auto flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[reactImage, flaskImage, piImage, pythonImage, expoImage].map(
          (image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                'relative aspect-[9/10] w-20 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-32 sm:rounded-2xl',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt=""
                width={500}
                height={500}
                className="absolute inset-0 h-full w-full object-contain p-5"
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="prose text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Research Project Scope
          </h1>
          <p>
            Pet ownership is common globally, with dogs being popular pets. Lack
            of knowledge and expertise about dog breeds, age, and health can
            lead to poor health outcomes for dogs and increased stress for
            owners. The proposed system aims to provide a user-friendly solution
            for identifying breed and age, as well as personalized supplements
            and diet plans. An intelligent chatbot helps identify reasons for
            inconsistent behavior and provides medications. IoT technology
            allows remote monitoring of pets&apos; emotional and behavioral
            patterns, enhancing their quality of life.
          </p>
        </div>
        <div className="mt-32 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5">
              <Image
                src={problemImage}
                alt=""
                width={500}
                height={500}
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-contain p-3 px-8 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Research Problem
            </h1>
            <div className="prose mt-6 space-y-7 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400">
              <p>
                Domestic dogs are a popular form of pet, but maintaining their
                health and mental well-being can be challenging for many owners.
                Extensive research among pet adopters has revealed that a
                majority of dog owners lack knowledge about their pet&apos;s
                breed and are uncertain about the vitamin supplements and diet
                plans needed to maintain good health, growth rate, mood, hair
                growth, and behavior. Additionally, leaving a dog alone may
                cause concerns about the safety of the house and the dog&apos;s
                behavioral state.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-32 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5">
              <Image
                src={objectiveImage}
                alt=""
                width={500}
                height={500}
                className="aspect-square -rotate-2 rounded-2xl bg-zinc-100 object-contain p-3 px-8 dark:bg-zinc-800 "
              />
            </div>
          </div>
          <div className="lg:order-last lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Research Objective
            </h1>
            <div className="prose mt-6 space-y-7 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400">
              <p>
                Help domestic dog owners to make a better understanding of their
                pets, and guide them to maintain good health, diet, and behavior
                or emotional state.
              </p>
              <ul className="leading-tight">
                <li>
                  <p>Identify the dog breed and age from an image</p>
                </li>
                <li>
                  <p>Optimize nutrition and health care routine</p>
                </li>
                <li>
                  <p>Identify unusual behavior and predict medical treatment</p>
                </li>
                <li>
                  <p>Real-time remote behavior monitoring using dog sounds</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-32 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 ">
              <Image
                src={solutionImage}
                alt=""
                width={500}
                height={500}
                className="aspect-square rotate-2 rounded-2xl bg-zinc-100 object-contain px-8 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Solution
            </h1>
            <div className="prose mt-6 space-y-7 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400">
              <p>
                The proposed system is a mobile-driven application that uses
                machine learning algorithms, image processing, and IoT sensors
                to identify and resolve problems in order to make a dog
                owner&apos;s pet dog happy, and healthy. It will determine the
                dog&apos;s breed and age based on a submitted image of a dog
                using image processing and a trained ML model. The diet plan
                will be adjusted by an optimization algorithm based on feedback
                from the owner. The solution includes an AI-based chatbot for
                identifying dog behavior changes, ailments, and skin problems.
                An IoT device analyzes and predicts dog sounds in the home area
                and notifies the owner in real time over the internet to
                anywhere in the world.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            System Architecture
          </h1>
          <div className="prose mt-6 space-y-7 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400">
            <p>
              The proposed system is a mobile-driven application that uses
              machine learning algorithms, image processing, and IoT sensors to
              identify and resolve problems in order to make a dog owner&apos;s
              pet dog happy, and healthy. It will determine the dog&apos;s breed
              and age based on a submitted image of a dog using image processing
              and a trained ML model. The diet plan will be adjusted by an
              optimization algorithm based on feedback from the owner. The
              solution includes an AI-based chatbot for identifying dog behavior
              changes, ailments, and skin problems. An IoT device analyzes and
              predicts dog sounds in the home area and notifies the owner in
              real time over the internet to anywhere in the world.
            </p>
          </div>

          <Image
            src={systemImage}
            alt=""
            width={724}
            height={800}
            className="mx-auto rounded-2xl bg-zinc-100 p-10 dark:bg-zinc-800"
          />
        </div>
        <div className="mt-20 text-center lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            Technologies
          </h1>
          <Photos />
        </div>
      </Container>
    </>
  )
}
