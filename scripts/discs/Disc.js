export const DiscAsHTML = (discObj) => {
  ;`
    <section class="disc">
        <div class="disc__brand">${discObj.brand}</div>
        <div class="disc__type">${discObj.type}</div>
        <div class="disc__color">${discObj.color}</div>
        <div class="disc__weight">${discObj.weight}</div>
    </section>
    `
}
