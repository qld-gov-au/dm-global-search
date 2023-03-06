import { html } from 'lit-html'

export function featuredResultsTemplate (exhibits: any[]) {
  return html`<h2 class="search-results-summary">Featured results</h2>
    ${exhibits.map((item, index) => {
                return html`
                    <article class="qg-card qg-card__light-theme qg-card__clickable">
                        <div class="content">
                            <div class="details">
                                <h2 class="qg-card__title">
                                    <a href="https://find.search.qld.gov.au${item.linkUrl}" class="stretched-link">${item.titleHtml}</a>
                                </h2>
                                <div class="qg-search-results__results-list">
                                    <p class="description">${item.descriptionHtml}</p>
                                    <p class="qg-search-results__url">${item.displayUrl}</p>
                                </div>
                            </div>
                        </div>
                    </article>`
            }
    )}
  `
}
