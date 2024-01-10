function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

async function getChicken() {
  const fetchEgg = await fetchEgg(chicken);
  const fryEgg = await fryEgg(egg);
  return fryEgg;
}

getChicken().then(console.log); // 🐔 => 🥚 => 🍳
