function login(t) {
  wx.login({
    success: (res) => {
      t.$parent.globalData.userInfo = res;
      console.log(res);
      console.log('xxxxx', t.$parent.globalData.userInfo);
      t.setCode(res);
    },
    fail: (res) => {
      console.log(res);
    },
    complete(record) {
      console.log('complete', record);
    }
  });
}

function saveUserInfo(userInfo) {
  wx.setStorageSync(
    'userInfo',
    userInfo
  );
}

function getUserInfo() {
  return wx.getStorageSync('userInfo');
}

export default {
  login,
  saveUserInfo,
  getUserInfo
};
