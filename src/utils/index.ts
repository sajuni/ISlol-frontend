import { isObject } from '@/utils/is';
import moment from 'moment';

/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(
  baseUrl: string,
  obj: Record<string, string>,
): string {
  let parameters = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  return /\?$/.test(baseUrl)
    ? baseUrl + parameters
    : baseUrl.replace(/\/?$/, '?') + parameters;
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key])
      ? deepMerge(src[key], target[key])
      : (src[key] = target[key]);
  }
  return src;
}

/**
 * 페이지 변환 (vuetify 페이지네이션과 spring jpa pageable의 페이지 인덱스를 보완하는 유틸)
 * @param page
 * @param isInput
 * @returns pageNumber
 */
export function pageConvert(page: number, isInput: boolean): number {
  if (typeof page != 'number') page = 0;
  if (isInput) {
    return page == 0 ? page : page - 1;
  } else {
    return page + 1;
  }
}

/*
 * 파일 사이즈
 * @param bytes
 * @param decimals
 * @returns string
 */
export function formatBytes(bytes: number, decimals: number): string {
  if (bytes == 0) return '0 Bytes';
  const k = 1024,
    dm = decimals || 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * date 더하기
 * @param addDate ADD 일자
 * @param format 일자포맷
 * @returns string
 * ex. getAddDate(7, 'YYYY-MM-DD')
 */
export function getAddDate(addDate: number, format?: string): string {
  const currentDateTime = moment();
  return currentDateTime.add(addDate, 'days').format(format);
}

/**
 * date format convert
 * @param dateParam 변경일자
 * @param format 변경할 포맷
 * @returns string
 * ex. getAddDate('2022-04-12T01:31:36.352695Z', 'YYYY.MM.DD')
 */
export function getCovertDate(dateParam: string, format: string): string {
  const date = moment(new Date(dateParam));
  return date.format(format);
}
