export interface ContainerProps {
  children: React.ReactNode
  classname?: string
}

export default function ContainerProps(props: ContainerProps) {
    return <div className= {`max-w-7x1 mx-auto px-4`}> {props.children} </div>
}