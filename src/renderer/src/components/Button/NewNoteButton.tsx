import { ActionButton, ActionButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuFileSignature } from 'react-icons/lu'

type ButtonProps = ActionButtonProps
export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)
  const handleCreate = () => createEmptyNote()
  return (
    <ActionButton onClick={handleCreate} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
