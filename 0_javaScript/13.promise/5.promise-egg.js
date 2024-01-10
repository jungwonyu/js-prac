function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  // return Promise.resolve(`🪴 => 🐓`);
  return Promise.reject(new Error('닭이 없다!'));
}

// fetchEgg('🐔') //
//   .then((egg) => console.log(egg));

// 에러를 어디서 처리하느냐에 따라서 다르다.

getChicken() //
  .then((chicken) => fetchEgg(chicken)) //
  .then((egg) => fryEgg(egg)) //
  .then((friedEgg) => console.log(friedEgg))
  .catch((error) => console.log(error.name));

// 위와 같은 코드를 간결하게 나타낼 수 있다.
getChicken() //
  .then(fetchEgg) //
  .then(fryEgg) //
  .then(console.log)
  .catch((error) => '🍞');

getChicken() //
  .catch((error) => {
    console.log(error.name);
    return '🍗';
  })
  .then((chicken) => fetchEgg(chicken)) //
  .then((egg) => fryEgg(egg)) //
  .then((friedEgg) => console.log(friedEgg));
