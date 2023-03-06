import { html, render } from 'lit-html'
import { fetchData } from '../utils/fetchData'
import { mainTemplate } from './main'
import { urlParameterMap } from '../utils/urlParameter'
import { relatedResultsTemplate } from './related-search'
import { noResultsTemplate } from './no-results'

export function searchForm () {
  const currUrlParameterMap = urlParameterMap()

  const onSubmit = (e: any) => {
    e.preventDefault()
    const inputValue = (document.querySelector('.qg-site-search__component .qg-search-site__input') as HTMLInputElement).value
    if (inputValue) {
      const params = new URLSearchParams(location.search)
      const currUrlParameterMap = urlParameterMap()

      // set params
      //params.set('scope', currUrlParameterMap.scope)
      params.set('scope', 'disaster.qld.gov.au')
      params.set('profile', currUrlParameterMap.profile)
      params.set('page', '1')
      params.set('start_rank', '1')
      params.set('num_ranks', '10')
      params.set('tiers', 'off')
      params.set('collection', 'qld-gov')

      // push history stack and fetch data
      setTimeout(function () {
        const currInputValue = (document.querySelector('.qg-site-search__component .qg-search-site__input') as HTMLInputElement).value
        params.set('query', currInputValue)
        history.pushState({}, '', `?${params.toString()}`)
        fetchData(params.toString()).then(data => {
          const { contextualNavigation, results } = data?.response?.resultPacket
          if (results?.length) {
            render(mainTemplate(data?.response, currUrlParameterMap), document.getElementById('qg-search-results__container') as HTMLBodyElement)
            render(relatedResultsTemplate(contextualNavigation), document.getElementById('related-search__tags')!)
          } else {
            render(noResultsTemplate('No results found'), document.getElementById('qg-search-results__container')!)
            render('', document.getElementById('related-search__tags')!)
          }
        })
      })
    } else {
      render('', document.getElementById('qg-search-results__container')!)
      render('', document.getElementById('related-search__tags')!)
    }
  }

  const suggestionVisibility = (value: boolean) => {
    const suggestionEl = document.querySelector('.qg-site-search__component .qg-search-concierge-help') as HTMLElement
    if (suggestionEl != null) {
      suggestionEl.hidden = value
    }
  }

  const onInputClick = (e: { type: string; key: string }) => {
    if (e.type === 'keydown') {
      if (e.key === 'Enter') {
        suggestionVisibility(true)
      } else {
        suggestionVisibility(false)
      }
    }
  }

  return html`
        <form action="#" role="search" class="qg-site-search__form qg-site-search__component qg-search-form qg-site-search__multiple-forms" data-suggestions="https://find.search.qld.gov.au/s/suggest.json?collection=qld-gov&fmt=json%2B%2B&alpha=0.5&profile=qld&scope=disaster.qld.gov.au" data-results-url="https://find.search.qld.gov.au/s/search.json?collection=qld-gov&profile=qld&scope=disaster.qld.gov.au&smeta_sfinder_sand=yes">
                    <div class="input-group">
                        <label for="qg-search-query-sm" class="qg-visually-hidden">Search Queensland Government</label>
                        <input type="text" name="query" id="qg-search-query-sm"  class="form-control qg-search-site__input" autocomplete="off" placeholder="Search website" tabindex="0" aria-required="true" aria-expanded="false" value="${currUrlParameterMap.query}" @keydown="${onInputClick}" @click="${onInputClick}"/>
                        <svg class="qg-search__icon d-none d-md-block d-lg-block" width="512px" height="512px" viewBox="0 0 512 512">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g transform="translate(67.298684, 71.201316)">
                                    <path d="M108.7791,227.405285 L11.3079182,324.876467 C5.45005384,330.734332 5.45005384,340.231806 11.3079182,346.089671 L27.4103294,362.192082 C33.2681938,368.049946 42.7656685,368.049946 48.6235328,362.192082 L146.094715,264.7209 C151.952579,258.863035 151.952579,249.365561 146.094715,243.507696 L129.992304,227.405285 C124.134439,221.547421 114.636965,221.547421 108.7791,227.405285 Z"></path>
                                    <path d="M221.701316,0.798683501 C305.096314,0.798683501 372.701316,68.6275439 372.701316,152.298684 C372.701316,235.969823 305.096314,303.798684 221.701316,303.798684 C138.306319,303.798684 70.7013165,235.969823 70.7013165,152.298684 C70.7013165,68.6275439 138.306319,0.798683501 221.701316,0.798683501 Z M221.310125,54.0389936 C167.081772,54.0389936 123.121006,98.2066236 123.121006,152.690156 C123.121006,207.173689 167.081772,251.341319 221.310125,251.341319 C275.538478,251.341319 319.499244,207.173689 319.499244,152.690156 C319.499244,98.2066236 275.538478,54.0389936 221.310125,54.0389936 Z" fill-rule="nonzero" transform="translate(221.701316, 152.298684) scale(-1, 1) translate(-221.701316, -152.298684) "></path>
                                </g>
                            </g>
                        </svg>
                        <button class="qg-search-close-concierge hide" type="button" aria-label="Close Search Concierge">
                            <svg width="512px" height="512px" viewBox="0 0 512 512">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect transform="translate(256.500000, 256.000000) scale(1, -1) rotate(45.000000) translate(-256.500000, -256.000000) " x="32" y="220" width="449" height="72" rx="15"></rect>
                                    <rect transform="translate(256.500000, 256.000000) rotate(45.000000) translate(-256.500000, -256.000000) " x="32" y="220" width="449" height="72" rx="15"></rect>
                                </g>
                            </svg>
                        </button>
                        <button type="submit" id="qg-site-search__submit" @click="${onSubmit}" class="asif btn btn-global-primary" title="Search site" data-analytics-link-group="qg-search-page-submit">
                            <span class="d-none d-md-block d-lg-block">Search</span>
                            <i class="fa fa-search fa-rotate-90 d-md-none d-lg-none"></i>
                        </button>
                        <!-- <div class="qg-search-concierge qg-search-concierge-initial">
                            <div class="qg-search-concierge-group helper">
                                <div class="qg-search-concierge-content">
                                    <h4>Popular services</h4>
                                    <ul class="list-group">
                                        <li class="list-group-item"><a href="https://www.service.transport.qld.gov.au/renewregistration/public/Welcome.xhtml" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Renew vehicle or boat rego</a></li>
                                        <li class="list-group-item"><a href="https://www.service.transport.qld.gov.au/checkmydemeritpoints/public/Welcome.xhtml" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Check my licence demerit points</a></li>
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/transport/licensing/driver-licensing/renew-replace/renew/online" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Renew my driving licence</a></li>
                                        <li class="list-group-item"><a href="https://www.change-of-address.services.qld.gov.au/" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Change my address</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="qg-search-concierge-group helper">
                                <div class="qg-search-concierge-content">
                                    <h4>Browse by category</h4>
                                    <ul class="list-group">
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/transport" tabindex="-1">Transport and motoring</a></li>
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/jobs" tabindex="-1">Employment and jobs</a></li>
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/education" tabindex="-1">Education and training</a></li>
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/about" tabindex="-1">Queensland and its government</a></li>
                                    </ul>
                                    <a href="https://www.qld.gov.au/queenslanders" tabindex="-1" class="all" data-analytics-link-group="qg-global-search-category">Browse all categories</a>
                                </div>
                            </div> 
                        </div>
                        -->

                        <div class="qg-search-concierge qg-search-concierge-help">
                            <div class="qg-search-concierge-group suggestions" @click="${onSubmit}"></div>
                            <div class="qg-search-concierge-group highlight"></div>
                            <div class="qg-search-concierge-group helper"></div>
                        </div>
                    </div>
                    <!--parameters to display results on search page-->
                </form>
        <p class="mt-3">Enter your query in the box above to search.</p>`
}
