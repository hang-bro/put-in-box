import { useEffect, useRef, useState } from 'react'

import FooterDrawer from '@/components/drawer/footerDrawer'
export default function App() {
  useEffect(() => {}, [])
  return (
    <>
      <main className=" relativew-screen h-screen flex flex-col text-base bg-gray-200">
        <FooterDrawer />
      </main>
    </>
  )
}
