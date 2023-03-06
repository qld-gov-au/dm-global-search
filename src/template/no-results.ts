import { html } from 'lit-html'

export function noResultsTemplate (message : string) {
  return html`
        <div class="alert alert-warning" role="alert">
            <h2><i class="fa fa-exclamation-triangle"></i>${message}</h2>
        </div>`
}
