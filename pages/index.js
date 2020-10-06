import Nav from '../components/nav'
import Background from '../components/bg'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Next.js + Tailwind CSS
        </h1>
      </div>
      <Background></Background>
    </div>
  )
}

