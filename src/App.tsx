import FooterDrawer from '@/components/drawer/footerDrawer'
import SortableUtil from '@/utils/sortable'
import { useEffect, useRef, useState } from 'react'

export default function App() {
  const [drag, setDrag] = useState(false)
  const ref = useRef<any>()
  const deleteRef = useRef<HTMLElement>()
  useEffect(() => {
    SortableUtil.SwapSortable(ref.current as HTMLElement, {
      group: 'name-shared',
      onStart: () => {
        setDrag(true)
      },
      onEnd: ({ item }) => {
        setDrag(false)
        // console.log(`onEnd ==>`, e)
        //event是一个声明了全局变量的一个对象
        const e = event || window.event //Firefox下是没有event这个对象的！！
        const element = deleteRef.current
        const rect = element!.getBoundingClientRect()
        const left = rect.left
        const right = rect.right
        const top = rect.top
        const bottom = rect.bottom

        const x = e.clientX
        const y = e.clientY

        if (x >= left && x <= right && y >= top && y <= bottom) {
          // 在元素里面
          console.log('在元素里面')
          console.log('删除元素', item)
          item.remove()
        }
      }
    })
  }, [])

  useEffect(() => {
    if (deleteRef.current) {
    }
  }, [deleteRef])

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
        {/* 拖动删除区域 */}
        <section
          ref={deleteRef}
          className={`w-40 aspect-square absolute right-10 bottom-10 border border-red-300 flex items-center justify-center text-gray-500 border-dashed rounded-lg ${
            drag ? 'block' : 'hidden'
          }`}
        >
          删除元素
        </section>
      </main>
    </>
  )
}
