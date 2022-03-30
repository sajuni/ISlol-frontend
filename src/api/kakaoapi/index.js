import axios from 'axios';

const kakaoApi = {
  getLocation: (payload) => {
    let headers = { Authorization: 'KakaoAK 6f5383869a61cb8497c781c9e4ffef33' };
    return axios.get(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${payload.x}&y=${payload.y}`,
      { headers }
    );
  },
};

export default kakaoApi;
