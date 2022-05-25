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
