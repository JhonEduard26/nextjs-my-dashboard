import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-[80svh]">
      <h2 className="text-6xl">Error 404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/dashboard/home">Return Home</Link>
    </div>
  )
}
