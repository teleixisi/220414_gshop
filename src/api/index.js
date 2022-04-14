import ajax from "./ajax"
const BASE_URL = '/api'
//获取经纬度
export function reqAddress = (goehash) => ajax(BASE_URL+`/position/${goehash}`)
//获取食物的分类列表
export function reqFoodTypes = () => ajax(BASE_URL+`/index_category`)
//根据经纬度获取商品列表
export function reqShops = (longitude,latitude) => ajax(BASE_URL+`/shops`,{longitude,latitude})