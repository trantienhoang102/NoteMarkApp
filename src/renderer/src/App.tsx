import {
  ActionButtonRows,
  Content,
  FloatingNoteTitle,
  MarkdownEditor,
  RootLayout,
  Sidebar
} from '@/components'
import { NotePreviewList } from '@/components/NotePreviewList'
import { useRef } from 'react'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      {/* <DraggableTopBar /> */}
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonRows className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1 text-black" onSelect={resetScroll} />
        </Sidebar>
        <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
