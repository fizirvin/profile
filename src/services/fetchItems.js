import { database } from 'config'
const { url, options } = database

export default async function fetchItems(query) {
  options.body = JSON.stringify(query)
  const res = await fetch(url, options).catch(() => {
    return false
  })
  if (!res)
    return { status: false, data: 'error, probably no internet service' }
  const data = await res.json().catch(() => {
    return false
  })
  if (!data) return { status: false, data: 'error' }
  if (data.errors) return { status: false, data: data.errors[0].message }
  return { status: true, data: data.data }
}
