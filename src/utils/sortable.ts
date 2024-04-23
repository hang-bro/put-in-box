import Sortable, { Swap, MultiDrag } from 'sortablejs'
Sortable.mount(new Swap(), new MultiDrag())

/** */
const shareOptions: Sortable.Options = {
  group: 'name-shared', // set both lists to same group
  animation: 150
}

/** */
const cloneOptions: Sortable.Options = {
  group: {
    name: 'name-clone',
    pull: 'clone'
  },
  animation: 150
}

/** */
const unSortOptions: Sortable.Options = {
  group: {
    name: 'name-unSort',
    pull: 'clone',
    put: false // Do not allow items to be put into this list
  },
  animation: 150,
  sort: false // To disable sorting: set sort to false
}

type IOption = Sortable.Options

class SortableUtil {
  /**可自由移动 */
  static ShareSortabel(el: HTMLElement, options?: IOption) {
    return new Sortable(el, { ...shareOptions, ...options })
  }

  /**可复制 */
  static CloneSortable(el: HTMLElement, options?: IOption) {
    return new Sortable(el, { ...cloneOptions, ...options })
  }

  /**不能排序 */
  static UnSortSortable(el: HTMLElement, options?: IOption) {
    return new Sortable(el, { ...unSortOptions, ...options })
  }

  /**handle */
  static HandleSortable(el: HTMLElement, options?: IOption) {
    return new Sortable(el, {
      ...{
        handle: '.handle', // handle's class
        animation: 150
      },
      ...options
    })
  }
}

export default SortableUtil
