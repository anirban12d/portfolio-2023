import type { QwikIntrinsicElements } from '@builder.io/qwik'

export function PhXLight(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 256 256" {...props} key={key}><path fill="#000000" d="M204.24 195.76a6 6 0 1 1-8.48 8.48L128 136.49l-67.76 67.75a6 6 0 0 1-8.48-8.48L119.51 128L51.76 60.24a6 6 0 0 1 8.48-8.48L128 119.51l67.76-67.75a6 6 0 0 1 8.48 8.48L136.49 128Z"></path></svg>
  )
}
export default PhXLight