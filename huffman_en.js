let input = `A Prayer in Spring
BY ROBERT FROST

Oh, give us pleasure in the flowers today;
And give us not to think so far away
As the uncertain harvest; keep us here
All simply in the springing of the year.

Oh, give us pleasure in the orchard white,
Like nothing else by day, like ghosts by night;
And make us happy in the happy bees,
The swarm dilating round the perfect trees.

And make us happy in the darting bird
That suddenly above the bees is heard,
The meteor that thrusts in with needle bill,
And off a blossom in mid air stands still.

For this is love and nothing else is love,
The which it is reserved for God above
To sanctify to what far ends He will,
But which it only needs that we fulfil.
`;


let huffman = {
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

console.log(results.length);
console.log(5*words);