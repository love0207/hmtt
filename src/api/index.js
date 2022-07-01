import request from '@/utils/request.js'

/**
 *获取短信验证码
 * @param {number} mobile
 * @returns
 */
export const getSmsCode = (mobile) => {
  return request({
    url: `/sms/codes/${mobile}`
  })
}
/**
 *
 * @param {*} data
 * @returns
 */
export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/authorizations',
    data: { mobile, code }
  })
}

export const getUserInfo = () => {
  return request({
    url: 'user'
  })
}
