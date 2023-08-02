export const urlParameterMap = () => {
  const url = new URL(window.location.href)
  const urlParams = new URLSearchParams(url.search)
  const rSpe = (str: string | '') => {
    return str?.replace(/[\\#+()$~%*?<>{}]/g, '')
  }
  return {
    query: rSpe((urlParams.get('query') || '').replace(/\%2F/g, '/')),
    profile: rSpe(urlParams.get('profile') || ''),
    label: rSpe(urlParams.get('label') || ''),
    filter: rSpe(urlParams.get('filter') || ''),
    startRank: parseInt(urlParams.get('start_rank') as string) || 1,
    collection: (urlParams.get('collection') || '').replace(/\%7E/g, '~'),
    activePage: parseInt(urlParams.get('page') as string) || 1
  }
}
