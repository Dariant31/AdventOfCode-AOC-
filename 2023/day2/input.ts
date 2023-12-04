export interface SetObject {
  'red': number;
  'green': number;
  'blue': number;
  [key: string]: number;
}

export interface GameObject {
  id: number;
  sets: SetObject[];
}

export const input = [
  "1: 1 green, 2 blue; 13 red, 2 blue, 3 green; 4 green, 14 red",
  "2: 2 blue, 11 green; 4 blue, 12 red, 4 green; 7 red, 1 blue, 9 green; 10 green, 12 red, 6 blue",
  "3: 1 blue, 12 green, 2 red; 9 red, 16 green; 1 red, 10 green, 1 blue; 1 red, 14 green",
  "4: 8 green, 18 blue; 4 green, 14 blue, 2 red; 3 blue, 5 green, 11 red",
  "5: 7 red, 15 blue, 1 green; 13 blue; 18 red, 2 green, 9 blue; 19 blue, 5 green, 10 red; 9 green, 2 blue, 7 red",
  "6: 1 red, 8 blue, 2 green; 1 blue, 3 red, 5 green; 2 green, 3 red, 2 blue; 1 blue, 4 green",
  "7: 4 red, 6 green, 1 blue; 3 blue, 9 green, 5 red; 5 blue, 5 green, 4 red; 6 green, 5 blue, 5 red; 13 red; 4 red, 2 blue, 9 green",
  "8: 7 blue, 14 green, 5 red; 1 green, 7 blue, 11 red; 6 blue, 16 red, 4 green; 8 red, 11 green, 7 blue; 6 blue, 18 red, 9 green",
  "9: 3 blue, 1 green, 6 red; 1 red, 1 blue, 1 green; 6 red, 2 blue, 1 green",
  "10: 6 red, 11 blue, 12 green; 1 blue, 2 red, 3 green; 14 green, 6 red, 7 blue; 6 red, 10 blue, 9 green; 6 blue, 2 red",
  "11: 5 blue, 2 red, 18 green; 2 blue, 13 green; 8 blue, 15 green, 2 red",
  "12: 5 red, 4 blue; 1 blue, 8 green, 8 red; 15 green, 5 red, 4 blue",
  "13: 12 blue, 1 red, 6 green; 9 red, 6 blue, 12 green; 3 red, 11 green, 6 blue; 8 red, 4 green, 10 blue; 3 green, 7 blue",
  "14: 9 red, 5 green, 1 blue; 1 red, 3 blue; 10 green, 7 red; 5 blue, 8 green, 10 red",
  "15: 3 blue, 9 red, 14 green; 15 green, 2 blue, 6 red; 7 green, 1 red, 5 blue",
  "16: 7 green, 4 blue, 6 red; 6 green, 4 blue, 8 red; 5 red, 2 blue, 10 green; 4 blue, 4 red, 15 green; 9 red, 15 green, 6 blue; 7 green, 5 blue, 2 red",
  "17: 8 red, 6 green, 2 blue; 4 green, 1 blue, 17 red; 1 green, 11 red, 1 blue",
  "18: 13 blue, 1 green, 3 red; 2 red, 2 green; 11 red, 1 green, 7 blue; 2 green, 7 blue, 2 red",
  "19: 2 green, 13 red, 2 blue; 1 green, 6 blue, 4 red; 1 green, 2 blue, 15 red",
  "20: 10 red, 11 blue, 8 green; 6 red, 13 blue, 2 green; 6 blue, 8 green, 3 red; 10 red, 2 blue, 8 green; 2 red, 3 blue, 7 green; 3 red",
  "21: 2 blue, 10 red; 5 green, 3 red; 5 green, 4 red, 4 blue; 6 blue, 9 red, 10 green",
  "22: 5 red, 1 green; 5 red; 4 red, 1 blue; 1 blue, 10 red",
  "23: 2 red, 11 blue, 4 green; 4 blue; 1 blue, 6 green, 4 red; 3 green, 4 blue, 2 red",
  "24: 4 green; 12 green, 4 blue, 1 red; 11 green, 1 blue, 2 red",
  "25: 10 red, 1 blue, 3 green; 3 green, 6 blue, 6 red; 2 green, 9 red, 2 blue; 1 blue, 3 green, 7 red; 6 blue, 4 green; 1 red",
  "26: 4 red, 11 green, 5 blue; 2 blue, 11 red, 9 green; 11 green, 3 red; 14 green, 13 red, 5 blue; 10 red, 5 blue, 9 green; 12 red, 4 blue, 6 green",
  "27: 8 red, 9 blue, 7 green; 14 red, 15 blue, 2 green; 7 green, 13 blue, 9 red; 8 green, 4 blue, 1 red",
  "28: 4 blue, 4 green, 3 red; 4 green, 9 red, 4 blue; 13 red, 10 blue, 4 green",
  "29: 7 red; 1 blue, 1 green; 3 red, 1 green, 1 blue; 2 blue; 17 red, 2 blue, 1 green; 6 red, 1 green, 2 blue",
  "30: 10 green, 4 red, 4 blue; 5 red, 6 blue, 9 green; 2 red, 3 green, 4 blue; 1 blue, 9 green, 1 red; 1 red",
  "31: 6 red, 3 green; 1 blue, 3 green, 9 red; 2 blue, 11 red; 13 red, 2 blue, 3 green; 5 green, 3 blue",
  "32: 2 red, 1 blue, 1 green; 3 green, 1 blue; 1 red, 6 green; 3 red, 3 green; 1 blue; 12 green, 3 red, 1 blue",
  "33: 17 blue, 14 green, 7 red; 5 red, 9 green, 16 blue; 8 green, 3 blue, 3 red; 10 green, 12 blue, 1 red",
  "34: 2 red, 1 green, 9 blue; 14 blue, 2 green, 9 red; 10 blue, 2 green, 16 red; 2 green, 5 red, 14 blue; 5 blue, 12 red, 2 green; 8 blue, 15 red, 3 green",
  "35: 14 green, 4 red; 16 green, 4 red; 4 red, 3 blue, 3 green; 5 green, 4 red, 4 blue; 3 red, 1 blue, 8 green",
  "36: 1 blue, 8 red, 4 green; 2 green, 15 blue, 4 red; 13 blue, 5 red, 8 green",
  "37: 2 red, 8 green, 7 blue; 9 green, 20 red, 3 blue; 3 blue, 1 green, 2 red; 9 red, 1 blue, 4 green; 6 green, 2 blue, 20 red",
  "38: 8 red, 2 blue, 2 green; 7 green, 4 red; 4 red, 10 green, 2 blue",
  "39: 9 green, 11 red, 6 blue; 6 blue, 2 green, 19 red; 2 red, 3 blue, 2 green; 4 green, 2 blue, 13 red; 19 red, 7 green, 1 blue",
  "40: 7 blue, 2 green, 11 red; 19 red, 4 green, 2 blue; 1 green, 10 red, 5 blue; 2 red, 1 green, 2 blue",
  "41: 1 red, 1 blue, 13 green; 13 green, 11 red, 5 blue; 19 green, 3 blue; 18 green, 1 red",
  "42: 1 blue, 2 green, 7 red; 13 green, 5 red, 7 blue; 6 red, 13 green, 9 blue; 12 red, 17 blue, 13 green; 9 red, 16 blue, 5 green; 11 red, 4 green",
  "43: 3 blue, 4 red; 6 red, 5 blue; 7 blue, 1 green, 5 red; 3 blue, 10 red",
  "44: 10 green, 10 blue; 2 blue, 10 red, 10 green; 2 green, 5 red, 4 blue; 8 red, 2 green, 2 blue; 14 red, 3 blue, 10 green; 14 red, 5 green, 3 blue",
  "45: 9 green, 2 red, 2 blue; 2 blue, 2 red, 7 green; 9 blue, 6 green",
  "46: 2 blue, 1 green; 1 blue, 1 red, 1 green; 1 blue; 1 blue, 1 green",
  "47: 4 green, 10 red, 14 blue; 19 red, 3 blue, 1 green; 4 green, 14 blue, 15 red; 9 blue, 17 red; 3 green, 12 blue, 7 red; 1 red, 11 blue, 4 green",
  "48: 9 red, 2 green, 1 blue; 7 red, 3 blue; 8 red, 1 green; 1 blue, 3 red",
  "49: 2 red, 3 green, 13 blue; 7 red, 15 blue, 3 green; 15 blue, 7 red; 11 blue, 5 red, 3 green",
  "50: 4 red, 4 green, 2 blue; 2 green, 3 red; 2 green, 3 red, 11 blue; 3 green, 2 red",
  "51: 4 blue, 17 green; 3 blue, 17 green, 1 red; 6 green, 8 blue",
  "52: 14 blue, 3 red; 11 green, 6 red, 9 blue; 6 blue, 10 red; 1 red, 1 green, 4 blue; 9 blue, 6 green; 3 red, 2 blue, 8 green",
  "53: 1 blue, 9 red, 9 green; 11 green, 1 red, 7 blue; 11 green, 9 red, 7 blue; 12 green, 15 red, 7 blue; 7 blue, 12 red, 1 green; 6 blue, 2 green, 4 red",
  "54: 7 blue, 2 red, 4 green; 2 red, 16 blue, 8 green; 15 blue, 7 green; 5 blue, 3 red, 2 green; 9 green, 15 blue; 1 green, 14 blue",
  "55: 5 red, 10 blue, 2 green; 5 blue, 5 red, 2 green; 6 red, 1 green; 7 red, 8 blue, 1 green; 1 green, 13 blue",
  "56: 14 blue, 11 green, 3 red; 10 blue, 7 green, 2 red; 2 red, 13 green, 1 blue",
  "57: 10 blue, 6 red; 10 red, 4 blue, 6 green; 2 green, 16 blue; 6 blue, 11 red, 7 green",
  "58: 3 red, 2 blue; 9 green, 12 blue; 1 red, 1 green, 5 blue; 1 blue, 2 green",
  "59: 6 red, 9 green, 2 blue; 6 green, 6 red, 7 blue; 2 green, 7 blue, 9 red; 1 green, 10 blue; 1 green, 3 blue, 1 red; 10 green, 1 red, 3 blue",
  "60: 13 green, 5 red, 9 blue; 3 blue, 12 green, 9 red; 4 blue, 17 green, 9 red; 12 green, 2 red; 6 red, 3 green, 8 blue; 13 green, 12 red",
  "61: 4 green, 15 red; 5 green, 15 red; 1 blue, 7 green, 12 red; 8 green, 3 blue, 4 red; 11 green, 11 red, 3 blue; 7 red, 12 green, 2 blue",
  "62: 3 red; 2 green, 8 red; 10 red, 8 blue; 1 blue, 4 red, 2 green; 2 green, 13 red; 6 red, 9 blue",
  "63: 4 green, 12 blue, 5 red; 5 blue, 5 green, 5 red; 3 blue, 17 green; 1 red, 1 blue, 17 green; 10 green, 4 red, 15 blue; 15 blue, 4 green",
  "64: 12 red, 9 blue, 4 green; 1 green, 1 red, 8 blue; 10 green, 11 red, 1 blue; 2 red, 10 blue",
  "65: 1 red, 3 green, 11 blue; 2 red, 6 green, 3 blue; 1 red, 7 green, 1 blue",
  "66: 2 green, 2 red, 4 blue; 19 red, 11 blue, 4 green; 6 blue, 2 green, 13 red; 16 blue, 4 green",
  "67: 1 blue, 5 red, 1 green; 1 green, 1 red, 1 blue; 2 green, 1 blue, 19 red",
  "68: 3 green, 1 red; 1 red, 3 blue; 3 blue, 2 red, 10 green; 4 green",
  "69: 5 green, 11 blue, 5 red; 13 green, 19 red, 8 blue; 19 red, 2 green, 11 blue",
  "70: 7 blue, 9 green; 1 red, 11 blue, 2 green; 6 blue, 10 green, 1 red",
  "71: 2 red, 2 green, 9 blue; 1 green, 20 blue, 1 red; 17 blue, 3 green, 2 red; 3 green, 13 blue, 2 red; 16 blue, 3 green; 11 blue",
  "72: 6 red, 4 green, 10 blue; 6 red, 7 blue; 1 blue, 8 green; 3 green, 6 red, 1 blue",
  "73: 2 green, 12 blue, 2 red; 6 red, 6 blue, 3 green; 8 red, 3 green, 1 blue; 3 green, 5 red, 10 blue",
  "74: 1 red, 15 green; 3 blue, 5 green, 6 red; 7 red, 5 green; 12 red, 12 green",
  "75: 14 blue, 2 green, 8 red; 13 blue, 6 green, 4 red; 4 green, 6 red, 1 blue",
  "76: 12 red, 5 blue, 1 green; 6 blue, 11 red; 2 red, 7 blue; 6 blue, 16 red",
  "77: 7 red, 2 green, 1 blue; 6 blue; 3 red, 1 green, 10 blue; 5 blue, 2 green, 1 red",
  "78: 9 blue, 3 green, 14 red; 16 red, 15 blue; 16 red, 9 green, 10 blue; 2 red, 8 blue, 3 green",
  "79: 7 green, 5 blue, 2 red; 5 red, 5 blue, 1 green; 2 red, 3 blue, 10 green; 5 green, 1 blue, 3 red; 5 blue, 3 red, 7 green",
  "80: 7 red, 6 blue; 6 red, 6 blue; 7 blue, 2 green; 3 red, 9 blue",
  "81: 8 green, 9 red, 1 blue; 9 red, 7 green; 1 green, 5 red; 2 green, 1 red; 1 blue, 14 red, 6 green; 1 blue, 11 green, 6 red",
  "82: 4 blue, 14 red, 1 green; 2 red, 4 green, 2 blue; 7 green, 4 blue, 13 red; 2 red, 1 green, 6 blue",
  "83: 9 red, 2 blue, 2 green; 6 green, 6 red; 9 red, 3 blue, 6 green",
  "84: 9 green, 1 red, 1 blue; 4 red, 15 green; 7 green, 1 blue, 12 red; 1 blue, 11 red, 14 green; 2 green, 11 red",
  "85: 13 green; 11 green; 15 blue, 10 green; 8 blue, 6 green; 11 green, 1 red, 3 blue; 13 green",
  "86: 13 green, 1 blue, 4 red; 1 green, 5 red; 1 blue, 9 green, 5 red",
  "87: 4 green, 5 red, 2 blue; 4 green; 8 green, 2 blue, 1 red; 4 blue, 8 green, 1 red; 5 red, 9 blue, 8 green; 7 blue",
  "88: 5 green, 1 blue, 3 red; 2 blue, 2 red, 3 green; 3 green; 2 blue, 1 red, 6 green",
  "89: 13 blue, 6 red, 15 green; 5 green, 14 blue, 9 red; 3 green, 15 blue, 5 red; 13 red, 13 green; 18 red, 4 green, 19 blue; 10 green, 10 red, 18 blue",
  "90: 1 red, 1 green; 1 blue, 2 green, 1 red; 5 red, 2 blue",
  "91: 9 blue; 6 green, 12 blue, 2 red; 3 red, 1 green, 8 blue; 7 green, 2 red, 8 blue",
  "92: 15 red, 7 green, 1 blue; 19 green, 12 red, 1 blue; 7 red, 16 green; 8 green, 1 blue, 14 red; 8 red, 1 blue, 9 green",
  "93: 11 red, 4 green; 7 green, 8 red; 4 blue, 6 green; 8 red, 6 green, 1 blue; 6 green; 1 red, 1 green, 4 blue",
  "94: 15 green; 1 red, 4 blue, 4 green; 1 red, 1 blue; 4 red, 1 green, 5 blue; 18 green, 3 red, 3 blue; 1 red",
  "95: 1 blue, 3 green, 10 red; 1 blue, 6 green; 15 green, 2 red, 3 blue; 2 blue, 8 red, 11 green; 13 green, 10 red; 5 red",
  "96: 8 green; 5 blue, 2 red, 4 green; 3 green, 4 red",
  "97: 5 red, 4 blue; 1 blue, 2 red, 9 green; 10 green, 3 red; 4 green, 3 blue, 4 red; 5 red, 4 green, 3 blue",
  "98: 3 green, 3 blue, 2 red; 2 blue, 2 red, 1 green; 3 green, 5 blue",
  "99: 11 green, 4 red, 12 blue; 9 red, 4 blue; 20 green, 6 blue",
  "100: 12 red, 9 green; 12 red; 9 red, 3 green; 8 red, 4 blue, 4 green; 8 blue, 11 red, 2 green",
];

export const inputObject: GameObject[] =  [
  {
    id: 1,
    sets: [
      { red: 0, green: 1, blue: 2 },
      { red: 13, green: 3, blue: 2 },
      { red: 14, green: 4, blue: 0 },
    ],
  },
  {
    id: 2,
    sets: [
      { red: 0, green: 11, blue: 2 },
      { red: 12, green: 4, blue: 4 },
      { red: 7, green: 9, blue: 1 },
      { red: 12, green: 10, blue: 6 },
    ],
  },
  {
    id: 3,
    sets: [
      { red: 2, green: 12, blue: 1 },
      { red: 9, green: 16, blue: 0 },
      { red: 1, green: 10, blue: 1 },
      { red: 1, green: 14, blue: 0 },
    ],
  },
  {
    id: 4,
    sets: [
      { red: 0, green: 8, blue: 18 },
      { red: 2, green: 4, blue: 14 },
      { red: 11, green: 5, blue: 3 },
    ],
  },
  {
    id: 5,
    sets: [
      { red: 7, green: 1, blue: 15 },
      { red: 0, green: 0, blue: 13 },
      { red: 18, green: 2, blue: 9 },
      { red: 10, green: 5, blue: 19 },
      { red: 7, green: 9, blue: 2 },
    ],
  },
  {
    id: 6,
    sets: [
      { red: 1, green: 2, blue: 8 },
      { red: 3, green: 5, blue: 1 },
      { red: 3, green: 2, blue: 2 },
      { red: 0, green: 4, blue: 1 },
    ],
  },
  {
    id: 7,
    sets: [
      { red: 4, green: 6, blue: 1 },
      { red: 5, green: 9, blue: 3 },
      { red: 4, green: 5, blue: 5 },
      { red: 5, green: 6, blue: 5 },
      { red: 13, green: 0, blue: 0 },
      { red: 4, green: 9, blue: 2 },
    ],
  },
  {
    id: 8,
    sets: [
      { red: 5, green: 14, blue: 7 },
      { red: 11, green: 1, blue: 7 },
      { red: 16, green: 4, blue: 6 },
      { red: 8, green: 11, blue: 7 },
      { red: 18, green: 9, blue: 6 },
    ],
  },
  {
    id: 9,
    sets: [
      { red: 6, green: 1, blue: 3 },
      { red: 1, green: 1, blue: 1 },
      { red: 6, green: 1, blue: 2 },
    ],
  },
  {
    id: 10,
    sets: [
      { red: 6, green: 12, blue: 11 },
      { red: 2, green: 3, blue: 1 },
      { red: 6, green: 14, blue: 7 },
      { red: 6, green: 9, blue: 10 },
      { red: 2, green: 0, blue: 6 },
    ],
  },
  {
    id: 11,
    sets: [
      { red: 2, green: 18, blue: 5 },
      { red: 0, green: 13, blue: 2 },
      { red: 2, green: 15, blue: 8 },
    ],
  },
  {
    id: 12,
    sets: [
      { red: 5, green: 0, blue: 4 },
      { red: 8, green: 8, blue: 1 },
      { red: 5, green: 15, blue: 4 },
    ],
  },
  {
    id: 13,
    sets: [
      { red: 1, green: 6, blue: 12 },
      { red: 9, green: 12, blue: 6 },
      { red: 3, green: 11, blue: 6 },
      { red: 8, green: 4, blue: 10 },
      { red: 0, green: 3, blue: 7 },
    ],
  },
  {
    id: 14,
    sets: [
      { red: 9, green: 5, blue: 1 },
      { red: 1, green: 0, blue: 3 },
      { red: 7, green: 10, blue: 0 },
      { red: 10, green: 8, blue: 5 },
    ],
  },
  {
    id: 15,
    sets: [
      { red: 9, green: 14, blue: 3 },
      { red: 6, green: 15, blue: 2 },
      { red: 1, green: 7, blue: 5 },
    ],
  },
  {
    id: 16,
    sets: [
      { red: 6, green: 7, blue: 4 },
      { red: 8, green: 6, blue: 4 },
      { red: 5, green: 10, blue: 2 },
      { red: 4, green: 15, blue: 4 },
      { red: 9, green: 15, blue: 6 },
      { red: 2, green: 7, blue: 5 },
    ],
  },
  {
    id: 17,
    sets: [
      { red: 8, green: 6, blue: 2 },
      { red: 17, green: 4, blue: 1 },
      { red: 11, green: 1, blue: 1 },
    ],
  },
  {
    id: 18,
    sets: [
      { red: 3, green: 1, blue: 13 },
      { red: 2, green: 2, blue: 0 },
      { red: 11, green: 1, blue: 7 },
      { red: 2, green: 2, blue: 7 },
    ],
  },
  {
    id: 19,
    sets: [
      { red: 13, green: 2, blue: 2 },
      { red: 4, green: 1, blue: 6 },
      { red: 15, green: 1, blue: 2 },
    ],
  },
  {
    id: 20,
    sets: [
      { red: 10, green: 8, blue: 11 },
      { red: 6, green: 2, blue: 13 },
      { red: 3, green: 8, blue: 6 },
      { red: 10, green: 8, blue: 2 },
      { red: 2, green: 7, blue: 3 },
      { red: 3, green: 0, blue: 0 },
    ],
  },
  {
    id: 21,
    sets: [
      { red: 10, green: 0, blue: 2 },
      { red: 3, green: 5, blue: 0 },
      { red: 4, green: 5, blue: 4 },
      { red: 9, green: 10, blue: 6 },
    ],
  },
  {
    id: 22,
    sets: [
      { red: 5, green: 1, blue: 0 },
      { red: 5, green: 0, blue: 0 },
      { red: 4, green: 0, blue: 1 },
      { red: 10, green: 0, blue: 1 },
    ],
  },
  {
    id: 23,
    sets: [
      { red: 2, green: 4, blue: 11 },
      { red: 0, green: 0, blue: 4 },
      { red: 4, green: 6, blue: 1 },
      { red: 2, green: 3, blue: 4 },
    ],
  },
  {
    id: 24,
    sets: [
      { red: 0, green: 4, blue: 0 },
      { red: 1, green: 12, blue: 4 },
      { red: 2, green: 11, blue: 1 },
    ],
  },
  {
    id: 25,
    sets: [
      { red: 10, green: 3, blue: 1 },
      { red: 6, green: 3, blue: 6 },
      { red: 9, green: 2, blue: 2 },
      { red: 7, green: 3, blue: 1 },
      { red: 0, green: 4, blue: 6 },
      { red: 1, green: 0, blue: 0 },
    ],
  },
  {
    id: 26,
    sets: [
      { red: 4, green: 11, blue: 5 },
      { red: 11, green: 9, blue: 2 },
      { red: 3, green: 11, blue: 0 },
      { red: 13, green: 14, blue: 5 },
      { red: 10, green: 9, blue: 5 },
      { red: 12, green: 6, blue: 4 },
    ],
  },
  {
    id: 27,
    sets: [
      { red: 8, green: 7, blue: 9 },
      { red: 14, green: 2, blue: 15 },
      { red: 9, green: 7, blue: 13 },
      { red: 1, green: 8, blue: 4 },
    ],
  },
  {
    id: 28,
    sets: [
      { red: 3, green: 4, blue: 4 },
      { red: 9, green: 4, blue: 4 },
      { red: 13, green: 4, blue: 10 },
    ],
  },
  {
    id: 29,
    sets: [
      { red: 7, green: 0, blue: 0 },
      { red: 0, green: 1, blue: 1 },
      { red: 3, green: 1, blue: 1 },
      { red: 0, green: 0, blue: 2 },
      { red: 17, green: 1, blue: 2 },
      { red: 6, green: 1, blue: 2 },
    ],
  },
  {
    id: 30,
    sets: [
      { red: 4, green: 10, blue: 4 },
      { red: 5, green: 9, blue: 6 },
      { red: 2, green: 3, blue: 4 },
      { red: 1, green: 9, blue: 1 },
      { red: 1, green: 0, blue: 0 },
    ],
  },
  {
    id: 31,
    sets: [
      { red: 6, green: 3, blue: 0 },
      { red: 9, green: 3, blue: 1 },
      { red: 11, green: 0, blue: 2 },
      { red: 13, green: 3, blue: 2 },
      { red: 0, green: 5, blue: 3 },
    ],
  },
  {
    id: 32,
    sets: [
      { red: 2, green: 1, blue: 1 },
      { red: 0, green: 3, blue: 1 },
      { red: 1, green: 6, blue: 0 },
      { red: 3, green: 3, blue: 0 },
      { red: 0, green: 0, blue: 1 },
      { red: 3, green: 12, blue: 1 },
    ],
  },
  {
    id: 33,
    sets: [
      { red: 7, green: 14, blue: 17 },
      { red: 5, green: 9, blue: 16 },
      { red: 3, green: 8, blue: 3 },
      { red: 1, green: 10, blue: 12 },
    ],
  },
  {
    id: 34,
    sets: [
      { red: 2, green: 1, blue: 9 },
      { red: 9, green: 2, blue: 14 },
      { red: 16, green: 2, blue: 10 },
      { red: 5, green: 2, blue: 14 },
      { red: 12, green: 2, blue: 5 },
      { red: 15, green: 3, blue: 8 },
    ],
  },
  {
    id: 35,
    sets: [
      { red: 4, green: 14, blue: 0 },
      { red: 4, green: 16, blue: 0 },
      { red: 4, green: 3, blue: 3 },
      { red: 4, green: 5, blue: 4 },
      { red: 3, green: 8, blue: 1 },
    ],
  },
  {
    id: 36,
    sets: [
      { red: 8, green: 4, blue: 1 },
      { red: 4, green: 2, blue: 15 },
      { red: 5, green: 8, blue: 13 },
    ],
  },
  {
    id: 37,
    sets: [
      { red: 2, green: 8, blue: 7 },
      { red: 20, green: 9, blue: 3 },
      { red: 2, green: 1, blue: 3 },
      { red: 9, green: 4, blue: 1 },
      { red: 20, green: 6, blue: 2 },
    ],
  },
  {
    id: 38,
    sets: [
      { red: 8, green: 2, blue: 2 },
      { red: 4, green: 7, blue: 0 },
      { red: 4, green: 10, blue: 2 },
    ],
  },
  {
    id: 39,
    sets: [
      { red: 11, green: 9, blue: 6 },
      { red: 19, green: 2, blue: 6 },
      { red: 2, green: 2, blue: 3 },
      { red: 13, green: 4, blue: 2 },
      { red: 19, green: 7, blue: 1 },
    ],
  },
  {
    id: 40,
    sets: [
      { red: 11, green: 2, blue: 7 },
      { red: 19, green: 4, blue: 2 },
      { red: 10, green: 1, blue: 5 },
      { red: 2, green: 1, blue: 2 },
    ],
  },
  {
    id: 41,
    sets: [
      { red: 1, green: 13, blue: 1 },
      { red: 11, green: 13, blue: 5 },
      { red: 0, green: 19, blue: 3 },
      { red: 1, green: 18, blue: 0 },
    ],
  },
  {
    id: 42,
    sets: [
      { red: 7, green: 2, blue: 1 },
      { red: 5, green: 13, blue: 7 },
      { red: 6, green: 13, blue: 9 },
      { red: 12, green: 13, blue: 17 },
      { red: 9, green: 5, blue: 16 },
      { red: 11, green: 4, blue: 0 },
    ],
  },
  {
    id: 43,
    sets: [
      { red: 4, green: 0, blue: 3 },
      { red: 6, green: 0, blue: 5 },
      { red: 5, green: 1, blue: 7 },
      { red: 10, green: 0, blue: 3 },
    ],
  },
  {
    id: 44,
    sets: [
      { red: 0, green: 10, blue: 10 },
      { red: 10, green: 10, blue: 2 },
      { red: 5, green: 2, blue: 4 },
      { red: 8, green: 2, blue: 2 },
      { red: 14, green: 10, blue: 3 },
      { red: 14, green: 5, blue: 3 },
    ],
  },
  {
    id: 45,
    sets: [
      { red: 2, green: 9, blue: 2 },
      { red: 2, green: 7, blue: 2 },
      { red: 0, green: 6, blue: 9 },
    ],
  },
  {
    id: 46,
    sets: [
      { red: 0, green: 1, blue: 2 },
      { red: 1, green: 1, blue: 1 },
      { red: 0, green: 0, blue: 1 },
      { red: 0, green: 1, blue: 1 },
    ],
  },
  {
    id: 47,
    sets: [
      { red: 10, green: 4, blue: 14 },
      { red: 19, green: 1, blue: 3 },
      { red: 15, green: 4, blue: 14 },
      { red: 17, green: 0, blue: 9 },
      { red: 7, green: 3, blue: 12 },
      { red: 1, green: 4, blue: 11 },
    ],
  },
  {
    id: 48,
    sets: [
      { red: 9, green: 2, blue: 1 },
      { red: 7, green: 0, blue: 3 },
      { red: 8, green: 1, blue: 0 },
      { red: 3, green: 0, blue: 1 },
    ],
  },
  {
    id: 49,
    sets: [
      { red: 2, green: 3, blue: 13 },
      { red: 7, green: 3, blue: 15 },
      { red: 7, green: 0, blue: 15 },
      { red: 5, green: 3, blue: 11 },
    ],
  },
  {
    id: 50,
    sets: [
      { red: 4, green: 4, blue: 2 },
      { red: 3, green: 2, blue: 0 },
      { red: 3, green: 2, blue: 11 },
      { red: 2, green: 3, blue: 0 },
    ],
  },
  {
    id: 51,
    sets: [
      { red: 0, green: 17, blue: 4 },
      { red: 1, green: 17, blue: 3 },
      { red: 0, green: 6, blue: 8 },
    ],
  },
  {
    id: 52,
    sets: [
      { red: 3, green: 0, blue: 14 },
      { red: 6, green: 11, blue: 9 },
      { red: 10, green: 0, blue: 6 },
      { red: 1, green: 1, blue: 4 },
      { red: 0, green: 6, blue: 9 },
      { red: 3, green: 8, blue: 2 },
    ],
  },
  {
    id: 53,
    sets: [
      { red: 9, green: 9, blue: 1 },
      { red: 1, green: 11, blue: 7 },
      { red: 9, green: 11, blue: 7 },
      { red: 15, green: 12, blue: 7 },
      { red: 12, green: 1, blue: 7 },
      { red: 4, green: 2, blue: 6 },
    ],
  },
  {
    id: 54,
    sets: [
      { red: 2, green: 4, blue: 7 },
      { red: 2, green: 8, blue: 16 },
      { red: 0, green: 7, blue: 15 },
      { red: 3, green: 2, blue: 5 },
      { red: 0, green: 9, blue: 15 },
      { red: 0, green: 1, blue: 14 },
    ],
  },
  {
    id: 55,
    sets: [
      { red: 5, green: 2, blue: 10 },
      { red: 5, green: 2, blue: 5 },
      { red: 6, green: 1, blue: 0 },
      { red: 7, green: 1, blue: 8 },
      { red: 0, green: 1, blue: 13 },
    ],
  },
  {
    id: 56,
    sets: [
      { red: 3, green: 11, blue: 14 },
      { red: 2, green: 7, blue: 10 },
      { red: 2, green: 13, blue: 1 },
    ],
  },
  {
    id: 57,
    sets: [
      { red: 6, green: 0, blue: 10 },
      { red: 10, green: 6, blue: 4 },
      { red: 0, green: 2, blue: 16 },
      { red: 11, green: 7, blue: 6 },
    ],
  },
  {
    id: 58,
    sets: [
      { red: 3, green: 0, blue: 2 },
      { red: 0, green: 9, blue: 12 },
      { red: 1, green: 1, blue: 5 },
      { red: 0, green: 2, blue: 1 },
    ],
  },
  {
    id: 59,
    sets: [
      { red: 6, green: 9, blue: 2 },
      { red: 6, green: 6, blue: 7 },
      { red: 9, green: 2, blue: 7 },
      { red: 0, green: 1, blue: 10 },
      { red: 1, green: 1, blue: 3 },
      { red: 1, green: 10, blue: 3 },
    ],
  },
  {
    id: 60,
    sets: [
      { red: 5, green: 13, blue: 9 },
      { red: 9, green: 12, blue: 3 },
      { red: 9, green: 17, blue: 4 },
      { red: 2, green: 12, blue: 0 },
      { red: 6, green: 3, blue: 8 },
      { red: 12, green: 13, blue: 0 },
    ],
  },
  {
    id: 61,
    sets: [
      { red: 15, green: 4, blue: 0 },
      { red: 15, green: 5, blue: 0 },
      { red: 12, green: 7, blue: 1 },
      { red: 4, green: 8, blue: 3 },
      { red: 11, green: 11, blue: 3 },
      { red: 7, green: 12, blue: 2 },
    ],
  },
  {
    id: 62,
    sets: [
      { red: 3, green: 0, blue: 0 },
      { red: 8, green: 2, blue: 0 },
      { red: 10, green: 0, blue: 8 },
      { red: 4, green: 2, blue: 1 },
      { red: 13, green: 2, blue: 0 },
      { red: 6, green: 0, blue: 9 },
    ],
  },
  {
    id: 63,
    sets: [
      { red: 5, green: 4, blue: 12 },
      { red: 5, green: 5, blue: 5 },
      { red: 0, green: 17, blue: 3 },
      { red: 1, green: 17, blue: 1 },
      { red: 4, green: 10, blue: 15 },
      { red: 0, green: 4, blue: 15 },
    ],
  },
  {
    id: 64,
    sets: [
      { red: 12, green: 4, blue: 9 },
      { red: 1, green: 1, blue: 8 },
      { red: 11, green: 10, blue: 1 },
      { red: 2, green: 0, blue: 10 },
    ],
  },
  {
    id: 65,
    sets: [
      { red: 1, green: 3, blue: 11 },
      { red: 2, green: 6, blue: 3 },
      { red: 1, green: 7, blue: 1 },
    ],
  },
  {
    id: 66,
    sets: [
      { red: 2, green: 2, blue: 4 },
      { red: 19, green: 4, blue: 11 },
      { red: 13, green: 2, blue: 6 },
      { red: 0, green: 4, blue: 16 },
    ],
  },
  {
    id: 67,
    sets: [
      { red: 5, green: 1, blue: 1 },
      { red: 1, green: 1, blue: 1 },
      { red: 19, green: 2, blue: 1 },
    ],
  },
  {
    id: 68,
    sets: [
      { red: 1, green: 3, blue: 0 },
      { red: 1, green: 0, blue: 3 },
      { red: 2, green: 10, blue: 3 },
      { red: 0, green: 4, blue: 0 },
    ],
  },
  {
    id: 69,
    sets: [
      { red: 5, green: 5, blue: 11 },
      { red: 19, green: 13, blue: 8 },
      { red: 19, green: 2, blue: 11 },
    ],
  },
  {
    id: 70,
    sets: [
      { red: 0, green: 9, blue: 7 },
      { red: 1, green: 2, blue: 11 },
      { red: 1, green: 10, blue: 6 },
    ],
  },
  {
    id: 71,
    sets: [
      { red: 2, green: 2, blue: 9 },
      { red: 1, green: 1, blue: 20 },
      { red: 2, green: 3, blue: 17 },
      { red: 2, green: 3, blue: 13 },
      { red: 0, green: 3, blue: 16 },
      { red: 0, green: 0, blue: 11 },
    ],
  },
  {
    id: 72,
    sets: [
      { red: 6, green: 4, blue: 10 },
      { red: 6, green: 0, blue: 7 },
      { red: 0, green: 8, blue: 1 },
      { red: 6, green: 3, blue: 1 },
    ],
  },
  {
    id: 73,
    sets: [
      { red: 2, green: 2, blue: 12 },
      { red: 6, green: 3, blue: 6 },
      { red: 8, green: 3, blue: 1 },
      { red: 5, green: 3, blue: 10 },
    ],
  },
  {
    id: 74,
    sets: [
      { red: 1, green: 15, blue: 0 },
      { red: 6, green: 5, blue: 3 },
      { red: 7, green: 5, blue: 0 },
      { red: 12, green: 12, blue: 0 },
    ],
  },
  {
    id: 75,
    sets: [
      { red: 8, green: 2, blue: 14 },
      { red: 4, green: 6, blue: 13 },
      { red: 6, green: 4, blue: 1 },
    ],
  },
  {
    id: 76,
    sets: [
      { red: 12, green: 1, blue: 5 },
      { red: 11, green: 0, blue: 6 },
      { red: 2, green: 0, blue: 7 },
      { red: 16, green: 0, blue: 6 },
    ],
  },
  {
    id: 77,
    sets: [
      { red: 7, green: 2, blue: 1 },
      { red: 0, green: 0, blue: 6 },
      { red: 3, green: 1, blue: 10 },
      { red: 1, green: 2, blue: 5 },
    ],
  },
  {
    id: 78,
    sets: [
      { red: 14, green: 3, blue: 9 },
      { red: 16, green: 0, blue: 15 },
      { red: 16, green: 9, blue: 10 },
      { red: 2, green: 3, blue: 8 },
    ],
  },
  {
    id: 79,
    sets: [
      { red: 2, green: 7, blue: 5 },
      { red: 5, green: 1, blue: 5 },
      { red: 2, green: 10, blue: 3 },
      { red: 3, green: 5, blue: 1 },
      { red: 3, green: 7, blue: 5 },
    ],
  },
  {
    id: 80,
    sets: [
      { red: 7, green: 0, blue: 6 },
      { red: 6, green: 0, blue: 6 },
      { red: 0, green: 2, blue: 7 },
      { red: 3, green: 0, blue: 9 },
    ],
  },
  {
    id: 81,
    sets: [
      { red: 9, green: 8, blue: 1 },
      { red: 9, green: 7, blue: 0 },
      { red: 5, green: 1, blue: 0 },
      { red: 1, green: 2, blue: 0 },
      { red: 14, green: 6, blue: 1 },
      { red: 6, green: 11, blue: 1 },
    ],
  },
  {
    id: 82,
    sets: [
      { red: 14, green: 1, blue: 4 },
      { red: 2, green: 4, blue: 2 },
      { red: 13, green: 7, blue: 4 },
      { red: 2, green: 1, blue: 6 },
    ],
  },
  {
    id: 83,
    sets: [
      { red: 9, green: 2, blue: 2 },
      { red: 6, green: 6, blue: 0 },
      { red: 9, green: 6, blue: 3 },
    ],
  },
  {
    id: 84,
    sets: [
      { red: 1, green: 9, blue: 1 },
      { red: 4, green: 15, blue: 0 },
      { red: 12, green: 7, blue: 1 },
      { red: 11, green: 14, blue: 1 },
      { red: 11, green: 2, blue: 0 },
    ],
  },
  {
    id: 85,
    sets: [
      { red: 0, green: 13, blue: 0 },
      { red: 0, green: 11, blue: 0 },
      { red: 0, green: 10, blue: 15 },
      { red: 0, green: 6, blue: 8 },
      { red: 1, green: 11, blue: 3 },
      { red: 0, green: 13, blue: 0 },
    ],
  },
  {
    id: 86,
    sets: [
      { red: 4, green: 13, blue: 1 },
      { red: 5, green: 1, blue: 0 },
      { red: 5, green: 9, blue: 1 },
    ],
  },
  {
    id: 87,
    sets: [
      { red: 5, green: 4, blue: 2 },
      { red: 0, green: 4, blue: 0 },
      { red: 1, green: 8, blue: 2 },
      { red: 1, green: 8, blue: 4 },
      { red: 5, green: 8, blue: 9 },
      { red: 0, green: 0, blue: 7 },
    ],
  },
  {
    id: 88,
    sets: [
      { red: 3, green: 5, blue: 1 },
      { red: 2, green: 3, blue: 2 },
      { red: 0, green: 3, blue: 0 },
      { red: 1, green: 6, blue: 2 },
    ],
  },
  {
    id: 89,
    sets: [
      { red: 6, green: 15, blue: 13 },
      { red: 9, green: 5, blue: 14 },
      { red: 5, green: 3, blue: 15 },
      { red: 13, green: 13, blue: 0 },
      { red: 18, green: 4, blue: 19 },
      { red: 10, green: 10, blue: 18 },
    ],
  },
  {
    id: 90,
    sets: [
      { red: 1, green: 1, blue: 0 },
      { red: 1, green: 2, blue: 1 },
      { red: 5, green: 0, blue: 2 },
    ],
  },
  {
    id: 91,
    sets: [
      { red: 0, green: 0, blue: 9 },
      { red: 2, green: 6, blue: 12 },
      { red: 3, green: 1, blue: 8 },
      { red: 2, green: 7, blue: 8 },
    ],
  },
  {
    id: 92,
    sets: [
      { red: 15, green: 7, blue: 1 },
      { red: 12, green: 19, blue: 1 },
      { red: 7, green: 16, blue: 0 },
      { red: 14, green: 8, blue: 1 },
      { red: 8, green: 9, blue: 1 },
    ],
  },
  {
    id: 93,
    sets: [
      { red: 11, green: 4, blue: 0 },
      { red: 8, green: 7, blue: 0 },
      { red: 0, green: 6, blue: 4 },
      { red: 8, green: 6, blue: 1 },
      { red: 0, green: 6, blue: 0 },
      { red: 1, green: 1, blue: 4 },
    ],
  },
  {
    id: 94,
    sets: [
      { red: 0, green: 15, blue: 0 },
      { red: 1, green: 4, blue: 4 },
      { red: 1, green: 0, blue: 1 },
      { red: 4, green: 1, blue: 5 },
      { red: 3, green: 18, blue: 3 },
      { red: 1, green: 0, blue: 0 },
    ],
  },
  {
    id: 95,
    sets: [
      { red: 10, green: 3, blue: 1 },
      { red: 0, green: 6, blue: 1 },
      { red: 2, green: 15, blue: 3 },
      { red: 8, green: 11, blue: 2 },
      { red: 10, green: 13, blue: 0 },
      { red: 5, green: 0, blue: 0 },
    ],
  },
  {
    id: 96,
    sets: [
      { red: 0, green: 8, blue: 0 },
      { red: 2, green: 4, blue: 5 },
      { red: 4, green: 3, blue: 0 },
    ],
  },
  {
    id: 97,
    sets: [
      { red: 5, green: 0, blue: 4 },
      { red: 2, green: 9, blue: 1 },
      { red: 3, green: 10, blue: 0 },
      { red: 4, green: 4, blue: 3 },
      { red: 5, green: 4, blue: 3 },
    ],
  },
  {
    id: 98,
    sets: [
      { red: 2, green: 3, blue: 3 },
      { red: 2, green: 1, blue: 2 },
      { red: 0, green: 3, blue: 5 },
    ],
  },
  {
    id: 99,
    sets: [
      { red: 4, green: 11, blue: 12 },
      { red: 9, green: 0, blue: 4 },
      { red: 0, green: 20, blue: 6 },
    ],
  },
  {
    id: 100,
    sets: [
      { red: 12, green: 9, blue: 0 },
      { red: 12, green: 0, blue: 0 },
      { red: 9, green: 3, blue: 0 },
      { red: 8, green: 4, blue: 4 },
      { red: 11, green: 2, blue: 8 },
    ],
  },
];
