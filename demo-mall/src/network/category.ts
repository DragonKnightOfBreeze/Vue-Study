import axios from "./axios"


export function getCategory() {
  return axios({
    url: "/category",
  })
}

export function getSubcategory(maitKey: string) {
  return axios({
    url: "/subcategory",
    params: {
      maitKey,
    },
  })
}

export function getCategoryDetail(miniWallKey: string, type: string) {
  return axios({
    url: "/subcategory/detail",
    params: {
      miniWallKey,
      type,
    },
  })
}
