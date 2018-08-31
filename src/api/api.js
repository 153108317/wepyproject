
import request from '../utils/request'
export async function detail(goodsId) {
  console.log(goodsId)
  return await request(null, `api/targaryen/query_goods_detail?goodsId=` + goodsId, null)
}
export async function goods(goods) {
  return await request(null, 'v5/goods/' + goods)
}
