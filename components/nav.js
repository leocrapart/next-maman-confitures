import Link from 'next/link'
import FacebookIcon from '../components/icons/facebook.js'

export default function Nav() {
  return (
    <div className="flex items-center justify-between h-8 bg-green-500">
      <Link href="/" className="p-0">
        <a className="flex justify-center w-full h-full p-0 hover:bg-gray-500">
          <div className="flex items-center">
            Home
          </div>
        </a>
      </Link>

      <Link href="/info" className="p-0">
        <a className="flex justify-center w-full h-full p-0 hover:bg-gray-500">
          <div className="flex items-center">
            Info
          </div>
        </a>
      </Link>

      <Link href="/shop" className="p-0">
        <a className="flex justify-center w-full h-full p-0 hover:bg-gray-500">
          <div className="flex items-center">
            Shop
          </div>
        </a>
      </Link>

      <Link href="/facebook" className="p-0">
        <a className="flex justify-center w-full h-full p-0 hover:bg-gray-500">
          <FacebookIcon/>
        </a>
      </Link>

      <Link href="/insta" className="p-0">
        <a className="flex justify-center w-full h-full p-0 hover:bg-gray-500">
          <div className="flex items-center">
            Insta
          </div>
        </a>
      </Link>

    </div>
  )
}
