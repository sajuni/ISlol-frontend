import { BaseAxios } from './baseAxios';
import _ from 'lodash-es';
import { ContentTypeEnum } from './enum/httpEnum';

/**
 * @description: axios 생성
 */
function createAxios() {
  return new BaseAxios(
    _.merge({
      authenticationScheme: 'Bearer',
      timeout: 10 * 1000,
      headers: { 'Content-Type': ContentTypeEnum.JSON },
      baseURL: '/api',
      requestOptions: {
        joinPrefix: false,
        isReturnNativeResponse: false,
        isTransformResponse: true,
        joinParamsToUrl: false,
        formatDate: true,
        errorMessageMode: 'message',
        urlPrefix: 'api',
        joinTime: true,
        ignoreCancelToken: true,
      },
    }),
  );
}
/**
 * @description: defHttp
 * axios 디폴트 옵션으로 생성
 * ex. defHttp.get<HellowModel>({ url: Api.GetHellowWorld });
 */
export const defHttp = createAxios();
