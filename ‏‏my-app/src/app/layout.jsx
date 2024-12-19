import { Tajawal } from 'next/font/google'
import  './globals.css'
import Footer from '@/compnante/Footer'
import Navbar from './Navbar'

const tajawal = Tajawal({ subsets: ['latin'],weight:['300','500','700'] })

export const metadata = {
  title: 'زاجل للحلول اللوجستية',
  description: 'اكتشف كيف يمكننا مساعدتك على تنمية أعمالك وزيادة أرباحك من خلال حلولنا الاحترافية وشبكتنا اللوجستية العالمية',
  
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="ar" dir='rtl'>
      <link rel="icon" href="../../public/icon.svg" />
      <meta property="og:image" content="https://zajil-express.com/_next/image?url=https%3A%2F%2Fbackend.zajil-express.com%2Fimg%2Fasset%2FYXNzZXRzL2RlbGl2ZXJlZC5qcGc%3D%3Fw%3D900%26h%3D613%26fit%3Dcrop-50-50%26s%3D9bfed752b143d264559d205209b0f89f&w=2048&q=75" />
      <body className={tajawal.className}>
      <Navbar/>
      {/* <NumTrack.Provider value={{NTrack,SetNtrack}}> */}
          {children}
      {/* </NumTrack.Provider> */}
        
        <Footer />
        
        
        </body>
    </html>
  )
}
