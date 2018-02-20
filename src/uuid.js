const createUUID = () => {

  let date = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  uuid.replace(/[xy]/g, (char) => {
    const random = ((date + Math.random()) * 16) % 16 | 0;
    date = Math.floor(date / 16);
    return (char === 'x' ? random : (random & 0x3 | 0x8)).toString(16);
  });

  return uuid;
};

console.log(`UUID GENERATED: ${createUUID()}`);

const countNumbers = (n) => {
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
