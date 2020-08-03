import {useDiscs, getDiscs} from "./DiscDataProvider.js"
import {DiscAsHTML} from "./Disc.js"

const contentTarget = document.querySelector(".discsContainer")
const eventHub = document.querySelector(".container")

const render = (discs) => {
  contentTarget.innerHTML = discs
    .map((discObject) => DiscAsHTML(discObject))
    .join("")
}

export const DiscList = () => {
  getDiscs().then(useDiscs).then(render)
}

eventHub.addEventListener("showDiscsClicked", DiscList)
eventHub.addEventListener("discStateChanged", () => {
  const newDiscs = useDiscs()
  render(newDiscs)
})
