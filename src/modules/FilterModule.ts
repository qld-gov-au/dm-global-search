import { render } from 'lit-html'
import { filterResultsTemplate } from '../template/filter-results'
import { urlParameterMap } from '../utils/urlParameter'
import { ParamMap } from '../types/url-parameters'

export class FilterModule {
  private urlParameter: ParamMap

  constructor () {
    this.urlParameter = urlParameterMap()
    this.setSessionStorage()
    /* Removed Filtered search */
   // this.filterResultsTemplate()
  }

  /**
     * setSessionStorage function set profile, scope and label from the URL parameters
     * @return {undefined}
     * */
  setSessionStorage () {
    const profile = this.urlParameter.profile
    const label = this.urlParameter.label

    if ((profile) && (profile !== 'qld')) {
      sessionStorage.setItem('fcProfile', profile)
    }
    label ? sessionStorage.setItem('fcLabel', label) : ''
  }

  /**
     * filterResultsTemplate display a template to filter search results
     * @return {undefined}
     * */
  filterResultsTemplate () {
    const profile = this.urlParameter.profile
    if ((this.urlParameter.filter) || (profile && profile !== 'qld')) {
      render(filterResultsTemplate(), document.getElementById('qg-filter-by-results') as HTMLBodyElement)
    }
  }
}
