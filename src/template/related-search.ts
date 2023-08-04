import { html, render } from 'lit-html'
import { urlParameterMap } from '../utils/urlParameter'
import { fetchData } from '../utils/fetchData'
import { mainTemplate } from './main'
import { noResultsTemplate } from './no-results'
import { RelatedSearchClick } from '../types/clickEvents'

export function relatedResultsTemplate (contextualNavigation: { categories: any; }) {
  const onRelatedSearchClick = (e: RelatedSearchClick) => {
    e.preventDefault()
    const clickedHref = e.target.href
    const clickedVal = e.target.textContent
    const currUrlParameterMap = urlParameterMap();
    (document.querySelector('.qg-site-search__component .qg-search-site__input') as HTMLInputElement).value = clickedVal

    // push in the history stack
    history.pushState({}, '', `${clickedHref}`)

    // fetch the results
    fetchData(clickedHref).then(data => {
      const contextualNavigation = data?.response?.resultPacket?.contextualNavigation
      const totalMatching = data?.response?.resultPacket?.resultsSummary?.totalMatching
      if (totalMatching > 0) {
        render(mainTemplate(data?.response, currUrlParameterMap), document.getElementById('qg-search-results__container') as HTMLBodyElement)
        render(relatedResultsTemplate(contextualNavigation), document.getElementById('related-search__tags')!)
      } else {
        render(noResultsTemplate('No results found'), document.getElementById('qg-search-results__container')!)
        render('', document.getElementById('related-search__tags')!)
      }
    })
  }

  if (contextualNavigation) {
    const { categories } = contextualNavigation
    if (categories[0]?.name === 'topic') {
      return html` <p class="related-search__title">Related search</p>
        <section class="related-search__tags test">
            ${categories[0]?.clusters.map((item: any) =>
              html`<a @click="${(e: RelatedSearchClick) => onRelatedSearchClick(e)}" href="${item.href}&start_rank=1" class="qg-btn btn-outline-dark m-1">${item.query}</a>`
          )}
        </section>`
    }
  }
}
