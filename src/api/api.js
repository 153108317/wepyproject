import wepy from 'wepy'
const baseurl = 'https://api.pinduoduo.com/'
import {request} from '../../utils/network'
export async function detail(api) {
  console.log(api)
  return await request(baseurl + api, null)
}
