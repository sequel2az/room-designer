import { navigate } from "gatsby"

export default () => {
  if (typeof window !== `undefined`) {
    navigate("/steps/1")
  }
  return null
}
