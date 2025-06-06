import { Button } from '@/components/ui/button'
import { Container } from '@/components/sum25/Container'
import { Layout } from '@/components/sum25/Layout'

export default function NotFound() {
  return (
    <Layout showFooter={false}>
      <div className="relative flex h-full items-center py-20 sm:py-36">
        <div 
          className="absolute inset-0 -top-36 bottom-0 overflow-hidden"
          style={{
            background: `linear-gradient(to bottom, transparent, var(--bgRed))`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, transparent, var(--cream, --bgRed))`,
            }}
          />
        </div>
        <Container className="relative flex w-full flex-col items-center">
          <p className="font-display text-2xl tracking-tight text-blue-900">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-lg tracking-tight text-blue-900">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Button className="mt-8">Go back home</Button>
        </Container>
      </div>
    </Layout>
  )
}
