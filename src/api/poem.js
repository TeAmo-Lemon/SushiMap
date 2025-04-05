import request from "@/utils/request.js"

export const getPositionsService = () => {
    return request.get('/poems/positions')
}

export const getPoemsService = (id) => {
    return request.get(`/poems/${id}`)
}