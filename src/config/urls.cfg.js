/**
 * @description 定义url地址常量
 */

export const LOGIN_URL = '/user/login'
export const AUTO_LOGIN_URL='/auto/login'
export const USER_INFO_UREL='/user/info'
export const MENU_LIST_URL='/menu/list'
export const USER_RIGHTS_URL='/user/rights'
export const AUTO_CODE_URL='/auto/code'
export const QRCODE_CODE_URL='/qrcode/code'
export const QRCODE_LOOP_URL='/qrcode/loop'
export const ANALYSIS_CUSTOMER_URL = '/analysis/customer'

export const PURCHASE_APPLY_LIST_URL='/purchase/apply/list'
export const DICT_LIST_URL='/dict/list'


/* 浣熊系统的url地址 */
export const BANNER_LIST_URL = '/banner'

/* 是否需要进行拦截 */
// export const NO_INTERCEPTOR_URLS: Array<string> = [
export const NO_INTERCEPTOR_URLS = [
    LOGIN_URL,
    QRCODE_CODE_URL,
    QRCODE_LOOP_URL
]

/* 其它服务器代理配置 */
export const PROXY_SERVICE_KEYS = {
    '/huangxiong': [
        BANNER_LIST_URL
    ]
}