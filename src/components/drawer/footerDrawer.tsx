import SortableUtil from '@/utils/sortable'
import { Drawer } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import './index.less'
import useMouseScroll from '@/hooks/useMouseScroll'
const App: React.FC = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef<any>()
  useEffect(() => {
    if (open) {
      SortableUtil.ShareSortabel(ref.current as HTMLElement, {
        onStart: e => {
          setOpen(false)
        }
      })
      useMouseScroll(ref.current.parentElement)
    }
  }, [open])
  return (
    <>
      <section
        onClick={() => {
          setOpen(true)
        }}
        className=" cursor-pointer absolute bottom-0 bg-red-200 w-full text-center"
      >
        open
      </section>
      <Drawer
        placement="bottom"
        closable={false}
        open={open}
        height={200}
        onClose={() => setOpen(false)}
        className="scroll1"
      >
        <ul ref={ref} className="h-full flex ">
          {Array(10)
            .fill({})
            .map((_, index) => {
              return (
                <li
                  key={index}
                  className=" cursor-pointer bg-orange-300 flex items-center justify-center mr-2 h-full aspect-square border rounded-lg"
                >
                  {index}
                </li>
              )
            })}
        </ul>
      </Drawer>
    </>
  )
}

export default App
