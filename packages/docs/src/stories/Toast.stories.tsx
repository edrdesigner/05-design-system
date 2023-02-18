import { useEffect, useRef, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@ignite-ui/react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false)
  const timeRef = useRef(0)

  useEffect(() => {
    return () => {
      clearTimeout(timeRef.current)
    }
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timeRef.current)
          timeRef.current = window.setTimeout(() => setOpen(true), 100)
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 13 de maio às 10:00',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
