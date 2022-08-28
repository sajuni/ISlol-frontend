import { defHttpOpt } from '@/utils/http/axios';

enum Api {
  Main = 'main',
}

export const search = (searchVal: string): Promise<any> => {
  return defHttpOpt({ baseURL: '', authenticationScheme: 'opgg' }).get<any>({
    url: `/summoners/kr/${searchVal}`,
  });
};
