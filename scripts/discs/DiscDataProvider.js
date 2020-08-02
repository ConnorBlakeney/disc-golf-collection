let discCollection = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
  const discStateChangedEvent = new CustomEvent("discStateChange")

  eventHub.dispatchEvent(discStateChangedEvent)
}

export const saveDisc = (disc) => {
  const jsonDisc = JSON.stringify(disc)

  return fetch("http://localhost:3000/discs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonDisc,
  })
    .then(getDiscs)
    .then(dispatchStateChangeEvent)
}

export const getDiscs = () => {
  return fetch("http://localhost:3000/discs")
    .then((response) => response.json())
    .then((parsedDiscs) => {
      discCollection = parsedDiscs
    })
}

export const useDiscs = discCollection.slice()
