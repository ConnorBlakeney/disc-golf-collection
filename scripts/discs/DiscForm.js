import {saveDisc} from "./DiscDataProvider.js"

const contentTarget = document.querySelector(".discFormContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "discForm--discNote") {
    const discBrand = document.querySelector("#discForm--brand")
    const discMold = document.querySelector("#discForm--mold")
    const discColor = document.querySelector("#discForm--color")
    const discWeight = document.querySelector("#discForm--weight")

    // Make a new object representation of a note
    const newDisc = {
      brand: discBrand.value,
      mold: discMold.value,
      color: discColor.value,
      weight: discWeight.value,
    }

    // Change API state and application state
    saveDisc(newDisc)
  }
})

const render = () => {
  contentTarget.innerHTML = `
        <section class="discForm">
            <input type="text" id="discForm--brand" placeholder="Disc Brand" />
            <input type="text" id="discForm--mold" placeholder="Disc Mold" />
            <input type="text" id="discForm--color" placeholder="Disc Color" />
            <input type="text" id="discForm--weight" placeholder="Disc Weight" />
            
            <button id="discForm--discNote">Save Disc</button>
        </section>
    `
}

export const DiscForm = () => {
  render()
}
