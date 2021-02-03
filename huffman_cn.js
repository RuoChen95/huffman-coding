// based on I(12.93) N(12.56) G(9.50) U(9.40) A(8.22) O(7.02) E(6.35) H(5.60) Y(5.52) Z(3.20) D(2.57) J(2.30) S(2.24) W(1.86) T(1.80) B(1.43) F(1.22) X(1.16) M(0.86) R(0.84) P(0.68) C(0.68) L(0.66) Q(0.62) K(0.20) from "https://zhidao.baidu.com/question/44727854.html"
let raw = {
  i: 1293,
  n: 1256,
  g: 950,
  u: 940,
  a: 822,
  o: 702,
  e: 635,
  h: 560,
  y: 552,
  z: 320,
  d: 257,
  j: 230,
  s: 224,
  w: 186,
  t: 180,
  b: 143,
  f: 112,
  x: 116,
  m: 86,
  r: 84,
  p: 68,
  c: 68,
  l: 66,
  q: 62,
  k: 20,
};

let rawString = "";
let array = [];
let arrayString = "";
let sum = 0;

console.log(Object.keys(raw));

for (let i = 0; i < Object.keys(raw).length; i++) {
    sum += raw[Object.keys(raw)[i]];
}

for (let i = 0; i < Object.keys(raw).length; i++) {
  array.push(raw[Object.keys(raw)[i]]/sum);
  arrayString+= raw[Object.keys(raw)[i]]/sum + "  ";
}

console.log(array, arrayString);



let input = `zhong da xiao yuan mian ji yi bai san shi qi dian san gong qing ， fu kan tu lu gang ， shi quan gang zui kuan guang 、 zui lu yi ang ran di xiao yuan 。 wwi man zu xue xi yu sheng huo suo xu ， xiao nei you qi bei di she shi   ， bao kuo yi liu di tu shu guan ， ling you wen wu guan 、 yin le ting 、 you yong chi 、 yun dong chang 、 wang qiu chang 、 bi qiu chang 、 shui shang huo dong zhong xin he jian shen shì deng
`;


let huffman = {
  i: "101",
  n: "100",
  g: "001",
  u: "000",
  a: "1110",
  o: "1101",
  e: "0111",
  h: "0101",
  y: "0100",
  z: "01101",
  d: "111111",
  j: "111110",
  s: "111100",
  w: "110011",
  t: "110010",
  b: "011001",
  f: "1111010",
  x: "1111011",
  m: "1100011",
  r: "1100010",
  p: "0110001",
  c: "1100000",
  l: "0110000",
  q: "11000011",
  k: "11000010",
};

let huffman_english = {
  " ": "111",
  "e": "010",
  "t": "1101",
  "a": "1011",
  "o": "1001",
  "i": "1000",
  "n": "0111",
  "s": "0011",
  "h": "0010",
  "r": "0001",
  "l": "10101",
  "d": "01101",
  "c": "00001",
  "u": "00000",
  "f": "110011",
  "m": "110010",
  "w": "110001",
  "y": "101001",
  "p": "101000",
  "g": "011001",
  "b": "011000",
  "v": "1100000",
  "k": "11000011",
  "x": "110000100",
  "j": "1100001011",
  "q": "11000010101",
  "z": "11000010100",
};

let results = '';
let words = 0;
for (let i = 0; i < input.length; i++) {
  if(huffman[input[i].toLowerCase()]) {
    words++;
    results += huffman[input[i].toLowerCase()];
  }
}

let results_english = '';
for (let i = 0; i < input.length; i++) {
  if(huffman_english[input[i].toLowerCase()]) {
    words++;
    results_english += huffman_english[input[i].toLowerCase()];
  }
}

console.log('Number of bits with my Pinyin dictionary: ', results.length);
console.log('Number of bits with English dictionary: ', results_english.length);
console.log('Number of bits with Fixed Length Coding:', 5*words);