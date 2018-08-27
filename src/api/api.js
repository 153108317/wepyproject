import wepy from 'wepy'
const baseurl = 'https://hpyx.vxiaoke360.com/'
export default async function request(api, options) {
  console.log(api)
  return wepy.request({url: encodeURI(baseurl + api), ...options})
    .then((response) => {
      console.log(api, response.data)
      let data = response.data.data
      return data
    })
    .catch((e) => {
      console.log(e.toString())
      return false
    }
  )
}
