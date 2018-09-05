import request from '../utils/request';

export async function detail(goodsId) {
  console.log(goodsId);
  return await request(null, `api/targaryen/query_goods_detail?goodsId=` + goodsId, null);
}

export async function goods(goods) {
  return await request(null, 'v5/goods/' + goods);
}

export async function hometabs() {
  return await request(null, 'api/targaryen/query_opt_list');
}

export async function goodsList(id, currentPage = 1) {
  return await request(null, `api/targaryen/query_goods_list_by_opt_id?optId=${id}&pageNum=${currentPage}&pageSize=20&sortType=1`);
}
