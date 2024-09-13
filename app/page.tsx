import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Your existing content */}
      <Link href="/button-demo" className="text-blue-500 hover:underline">
        Go to Button Demo
      </Link>
    </main>
  )
}
