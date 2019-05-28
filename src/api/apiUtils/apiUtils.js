export const serializeQueryParams = paramObj => {
  if (paramObj) {
    return `?${Object.keys(paramObj)
      .map(k => {
        if (typeof paramObj[k] === 'object') {
          return (
            paramObj[k] &&
            paramObj[k]
              .map(v => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
              .join('&')
          )
        }
        return `${encodeURIComponent(k)}=${encodeURIComponent(paramObj[k])}`
      })
      .join('&')}`
  }
  return ''
}

export const deserializeQueryParams = queryParam => {
  if (queryParam) {
    const pairs = queryParam.replace('?', '').split('&')
    const result = {}
    pairs.forEach(p => {
      const pair = p.split('=')
      const key = pair[0]
      const value = decodeURIComponent(pair[1] || '')
      if (result[key]) {
        if (Object.prototype.toString.call(result[key]) === '[object Array]') {
          result[key].push(value)
        } else {
          result[key] = [result[key], value]
        }
      } else {
        result[key] = value
      }
    })
    return JSON.parse(JSON.stringify(result))
  }
  return {}
}
