export const MAX_LEN = 32;
export const MIN_LEN = 8;
export const STRENGHT_SCALE_WITH = 10;

export enum CharacterSet {
  UppercaseLetters,
  LowercaseLetters,
  Numbers,
  Symbols,
}

const CHARACTERS: { [key in CharacterSet]: string[] } = {
  [CharacterSet.UppercaseLetters]: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  [CharacterSet.LowercaseLetters]: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  [CharacterSet.Numbers]: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  [CharacterSet.Symbols]: [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "{",
    "|",
    "}",
    "~",
  ],
};

export function generate(cs: CharacterSet[], len: number): string {
  const chars = cs.flatMap((c) => CHARACTERS[c]);
  let password = "";
  for (let i = 0; i < len; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}

function entropy(charCount: number, len: number): number {
  return len * (Math.log(charCount) / Math.log(2));
}

const minStrength = (() => {
  const minCharsetSize = Math.min(
    ...Object.values(CHARACTERS).map((c) => c.length)
  );
  return Math.round(entropy(minCharsetSize, MIN_LEN));
})();
const maxStrength = (() => {
  const sumCharsetsSize = Object.values(CHARACTERS).reduce(
    (acc, curr) => acc + curr.length,
    0
  );
  return Math.round(entropy(sumCharsetsSize, MAX_LEN));
})();

export function strenght(cs: CharacterSet[], len: number): number {
  if (cs.length == 0 || len == 0) {
    return 0;
  }

  const charCount = cs.reduce((acc, curr) => acc + CHARACTERS[curr].length, 0);

  const e = entropy(charCount, len);
  let strenght =
    1 +
    ((e - minStrength) * (STRENGHT_SCALE_WITH - 1)) /
      (maxStrength - minStrength);
  return Math.round(strenght);
}
