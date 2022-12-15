export interface RatioMain {
  //리스트 왼쪽 전적부분
  type: string;
  timeStamp: string;
  result: string;
  length: string;
  //챔피언이미지 kda부분
  championImg: string;
  championLevel: string;
  spells: string[];
  runes: string[];
  kda: string;
  ratio: string;
  //챔피언이미지 밑 아이템부분
  items: string[];
  ward: string;
  multiKill: string;
  badge: string;
  //챔피언이미지 오른쪽 정보부분
  pKill: string;
  controllWard: string;
  cs: string;
  averageTier: string;
  //맨오른쪽 플레이어부분
  participants: Object[];
}
