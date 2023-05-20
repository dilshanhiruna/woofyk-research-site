import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkCodeTitles from './src/lib/remark-code-title.mjs'
import rehypePresetMinify from 'rehype-preset-minify'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/documents': { page: '/documents' },
      '/presentations': { page: '/presentations' },
      '/scope': { page: '/scope' },
      '/milestones': { page: '/milestones' },
      '/404': { page: '/404' },
    }
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkCodeTitles],
    rehypePlugins: [rehypePrismPlus, rehypePresetMinify],
    providerImportSource: '@mdx-js/react',
  },
})

export default withMDX(nextConfig)
