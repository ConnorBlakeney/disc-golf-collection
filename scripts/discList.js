import { discSliced } from "./discDataProvider.js"
import { discAsHTML } from "./disc.js"

export const discList = () => {
  const discArray = discSliced()

  const contentTarget = document.querySelector(".discs")
}
