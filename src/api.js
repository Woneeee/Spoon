const fetch = require("node-fetch");

const baseUrl = "https://apis.data.go.kr/5050000/";

const serviceKey =
  "LNn5PaYmx5QeK6lz%2FO%2BtXumj4%2B9%2FzuMa4SWLHaZ6CRqBZm1G2Y%2BCREbroaN%2BDjW1UKysFG1RXkpajRrQh1qR1g%3D%3D";

export const restaurant = () =>
  fetch(
    `${baseUrl}menuRstrtService/getMenuRstrt?serviceKey=${serviceKey}&pageNo=1&numOfRows=133` // numOfRows (배열의 길이 최댓값) : 133 => 임의로 작성
  ).then((res) => res.json());

export const cafe = () =>
  fetch(
    `${baseUrl}cafeInfoService/getCafeInfo?serviceKey=${serviceKey}&pageNo=1&numOfRows=100`
  ).then((res) => res.json());

export const hot = () =>
  fetch(
    `${baseUrl}eatHtpService/getEatHtp?serviceKey=${serviceKey}&pageNo=1&numOfRows=100`
  ).then((res) => res.json());
