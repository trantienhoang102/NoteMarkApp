import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const title = 'Note Title'
  const selectedNote = useAtomValue(selectedNoteAtom)

  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span className="text-gray-100">{selectedNote?.title}</span>
    </div>
  )
}
