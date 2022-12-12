import { MutableRefObject, useRef } from "react"

interface Props {
  elementRef: MutableRefObject<HTMLDivElement>
}
export const scrollToElement = ({elementRef}: Props) => {
  elementRef.current && elementRef.current.scrollIntoView()
}