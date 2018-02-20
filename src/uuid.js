let a,
  b;
const time = Math.round(new Date().getTime() / 1000);
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ID_LENGTH = 8;

a = time.toString(10).substring(0, 8);

const generate = () => {
  let rtn = '';
  for (let i = 0; i < ID_LENGTH; i++) {
    rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  return rtn;
};

protocolRequest = `${new Date().getFullYear()}${a}${generate()}`;

const rand = (min, max) => {
  if (min === null && max === null) { return 0; }

  if (max === null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};


const createUUID = () => {
  let date = new Date().getTime();

  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const randomize = (date + Math.random() * 16) % 16 | 0;
    date = Math.floor(date / 16);
    return (char == 'x' ? random : (random & 0x3 | 0x8)).toString(16);
  });

  return uuid;
};

console.log(`UUID GENERATED: ${createUUID()}`);

const count_numbers = (n) => {
  if (!(typeof n !== 'number')) {
    let count = 0;
    if (n > 1) ++count;

    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
    return count;
  }

  return false;
};
