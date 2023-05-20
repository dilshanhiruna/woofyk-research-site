import { useEffect, useRef } from 'react'

import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

import { MDXProvider } from '@mdx-js/react'
import Pre from '@/components/Pre'

const components = {
  pre: Pre,
}

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <title>Woofyk</title>
        <link rel="icon" href="./woofyk.png" />
      </Head>

      <MDXProvider components={components}>
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>
            <Component previousPathname={previousPathname} {...pageProps} />
          </main>
          <Footer />
        </div>
      </MDXProvider>
    </>
  )
}
