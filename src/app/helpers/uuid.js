const fetch = (time, data) => {
  return new Promise(resolve => {
    resolve(data);
  });
};

const run = async () => {
  console.time('run');
  const user = await fetch(1000, { user: 'Junior Silva', id: 1 });
  const rt = await Promise.all([
    fetch(1000, { user_id: user.id, orders: [ { order: 1 }, { order: 2 } ] }),
    fetch(1000, { user_id: user.id, orders: [ { review: 1 }, { review: 2 } ] })
  ]);
  console.log(rt);
  console.timeEnd('run');
};
run();

const createUUID = () => {
  let date = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  uuid.replace(/[xy]/g, (char) => {
    const random = ((date + Math.random()) * 16) % 16 || 0;
    date = Math.floor(date / 16);
    return (char === 'x' ? random : ((random && 0x3) || 0x8)).toString(16);
  });

  return uuid;
};

const countNumbers = (n) => {
  if (!(typeof n !== 'number')) {
    let count = 0;
    if (n > 1) count += 1;

    while (n / 10 >= 1) {
      n /= 10;
      count += 1;
    }
    return count;
  }
  return false;
};

export { createUUID, countNumbers };
