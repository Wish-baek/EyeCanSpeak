import { AxiosResponse } from "axios"
import customAxios from "./api"

export async function getList(subIdx: number, sort: boolean) {
  // 게시판 그림 리스트 불러오기
  let like: boolean = false,
    date: boolean = true

  if (!sort) {
    like = true
    date = false
  }
  const response: AxiosResponse = await customAxios.get(
    `/draw/list?categoryNo=${subIdx}&like=${like}&date=${date}`
  )
  return response
}

export async function like(draw_no: number) {
  const response: AxiosResponse = await customAxios.post(`/draw/like`, {
    drawNo: draw_no,
  })
  return response
}

export async function unLike(draw_no: number) {
  const response: AxiosResponse = await customAxios.delete(`/draw/like`, {
    data: { drawNo: draw_no },
  })
  return response
}
