import { FC } from 'react'

interface NewComponentProps {
    userName: string
}

const NewComponent: FC<NewComponentProps> = ({userName}) => {


  return (
    <div>name: {userName}</div>
  )
}

export default NewComponent