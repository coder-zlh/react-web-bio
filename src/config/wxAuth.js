const appId = "wxffe998af728d17c6";
const appsecret = "85e0520807f6608eeed9c02983697f7f";
const localHostUrl = "http://zlher.vaiwan.com";
const getWXAuthCodeUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${encodeURIComponent(localHostUrl)}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;

function getWXAuthAccessCodeUrl(code){
    return `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appId}&secret=SECRET&code=${code}&grant_type=authorization_code`
}
export { getWXAuthCodeUrl, getWXAuthAccessCodeUrl };