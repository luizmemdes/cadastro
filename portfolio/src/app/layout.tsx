import './globals.scss'
import { Poppins } from 'next/font/google'

const inter = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600']
})

export const metadata = {
  title: 'Luiz Mendes',
  description: 'Luiz is a full-stack developer in training, currently in the 4th semester of his Systems Analysis and Development program. He has hands-on experience in development and technical support, gained during an internship at Trier Sistemas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
