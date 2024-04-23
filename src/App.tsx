import { useEffect, useRef, useState } from 'react'
import './index.less'
import SortableUtil from '@/utils/sortable'
type IList = { value: number; id: string }
export default function App() {
  const ref = useRef<HTMLElement & HTMLUListElement>(null)
  const ref2 = useRef<HTMLElement & HTMLUListElement>(null)

  const [list, setList] = useState<IList[]>(
    Array(5)
      .fill({})
      .map(() => ({ value: Math.floor(Math.random() * 100), id: crypto.randomUUID() }))
  )
  const [list2, setList2] = useState<IList[]>(
    Array(5)
      .fill({})
      .map(() => ({ value: Math.floor(Math.random() * 100), id: crypto.randomUUID() }))
  )
  useEffect(() => {
    SortableUtil.CloneSortable(ref.current as HTMLElement)
    SortableUtil.CloneSortable(ref2.current as HTMLElement)
  }, [])
  return (
    <main className=" w-screen h-screen flex  items-center justify-center text-2xl">
      <ul ref={ref} className=" w-[500px] max-h-[500px] overflow-auto">
        {list.map(item => {
          return (
            <li
              className=" mb-2 cursor-pointer px-5 py-3 bg-gray-300"
              data-id={item.id}
              data-value={item.value}
              key={item.id}
            >
              {item.value}
            </li>
          )
        })}
      </ul>
      <ul ref={ref2} className=" w-[500px] max-h-[500px] overflow-auto mx-5">
        {list2.map(item => {
          return (
            <li
              className=" mb-2 cursor-pointer px-5 py-3 bg-pink-300"
              data-id={item.id}
              data-value={item.value}
              key={item.id}
            >
              {item.value}
            </li>
          )
        })}
      </ul>
    </main>
  )
}
