// app/layout.tsx
import './globals.css'
import Menu from '../components/Menu'

export const metadata = {
  title: 'Next.js App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <div className="flex h-full">
          <Menu />
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
