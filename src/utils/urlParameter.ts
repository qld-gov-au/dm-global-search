export const urlParameterMap = () => {
  const url = new URL(window.location.href)
  const urlParams = new URLSearchParams(url.search)
  const rSpe = (str: string | null) => {
    return str?.replace(/[\\#+()$~%*?<>{}]/g, '')
  }
  return {
    query: rSpe((urlParams.get('query') || '').replace(/\%2F/g, '/')),
    profile: rSpe(urlParams.get('profile')) || '',
    label: rSpe(urlParams.get('label')) || '',
    filter: rSpe(urlParams.get('filter')) || '',
    numRanks: parseInt(urlParams.get('num_ranks') as string) || 0,
    startRank: parseInt(urlParams.get('start_rank') as string) || 1,
    collection: rSpe(urlParams.get('collection')) || '',
    //scope: rSpe(urlParams.get('scope')) || '',
    scope: 'disaster.qld.gov.au',
    activePage: parseInt(urlParams.get('page') as string) || 1
  }
}
