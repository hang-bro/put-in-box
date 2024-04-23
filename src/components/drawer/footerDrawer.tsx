import SortableUtil from '@/utils/sortable'
import { Drawer } from 'antd'
import React, { useEffect, useRef, useState } from 'react'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef<any>()
  useEffect(() => {
    open && SortableUtil.ShareSortabel(ref.current as HTMLElement)
  }, [open])
  return (
    <>
      <section
        onClick={() => {
          setOpen(true)
        }}
        className=" absolute bottom-0 bg-red-200 w-full text-center"
      >
        this is drawer
      </section>
      <Drawer
        placement="bottom"
        closable={false}
        open={open}
        height={200}
        onClose={() => setOpen(false)}
      >
        <ul ref={ref} className="h-full flex ">
          {Array(10)
            .fill({})
            .map((_, index) => {
              return (
                <li
                  key={index}
                  className=" bg-orange-300 flex items-center justify-center mr-2 h-full aspect-square border rounded-lg"
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
