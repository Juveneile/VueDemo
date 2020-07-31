import { ajax } from '@/api/http'

const resource = 'empiPatient'

export const listApi = (params) => {
  return ajax.get(resource, { params: { ...params } })
}
export const allApi = (params) => {
  return ajax.get(`${resource}/_all`, { params: { ...params } })
}
export const updateApi = (params) => {
  return ajax.put(`${resource}/${params.id}`, params)
}
export const addApi = (params) => {
  return ajax.post(resource, params)
}
export const delApi = (params) => {
  return ajax.delete(`${resource}/${params.id}`)
}
