import { useEffect, useRef, useState } from 'react'
import { FloatButton } from 'antd'
import FooterDrawer from '@/components/drawer/footerDrawer'
import SortableUtil from '@/utils/sortable'

export default function App() {
  const [drag, setDrag] = useState(false)
  useEffect(() => {
    SortableUtil.ShareSortabel(ref.current as HTMLElement, {
   
    })
  }, [])
  const ref = useRef<any>()

  return (
    <>
      <main className=" relative w-screen h-screen flex flex-col text-base bg-gray-200">
        <div ref={ref} className="  h-full w-full flex ">
          {Array(10)
            .fill({})
            .map((_, index) => {
              return (
                <div
                  key={index}
                  className=" h-32 w-32 cursor-pointer bg-red-300 flex items-center justify-center mr-2 aspect-square border rounded-lg"
                >
                  {index}
                </div>
              )
            })}
        </div>
        <FooterDrawer />
      </main>
    </>
  )
}
