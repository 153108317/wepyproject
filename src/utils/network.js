import wepy from 'wepy'

export default function request(context, api, opt) {
  return wepy.request({ url: encodeURI(api), ...opt }).then((res) => {
    console.log(res.data.result)
    return res.data.result
  }).catch(e) {
    console.log(e)
    return { code: 0, msg: 'nodata' }
  }
}
