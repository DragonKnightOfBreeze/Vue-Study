import axios from "./axios"

export const BANNER = "banner"
export const RECOMMEND = "recommend"

export function getHomeMultiData() {
  return axios({
    url: "/home/multidata",
  })
}

export function getHomeData(type: string, page: number) {
  return axios({
    url: "/home/data",
    params: {
      type,
      page,
    },
  })
}
