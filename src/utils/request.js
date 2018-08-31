import wepy from 'wepy'
const baseurl = 'https://api.pinduoduo.com/'
export default function request(context, api, opt) {
  console.log('apiapi', api)
  return wepy.request({ url: encodeURI(baseurl + api), ...opt }).then((res) => {
    console.log('xxxxx', res.data)
    return res.data
  })
}
