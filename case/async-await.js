const persiapan = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Menyiapkan Bahan...");
      }, 3000);
  });
};

const rebusAir = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Rebus Air...");
      }, 7000);
  });
};

const masak = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Masak Mie...");
      }, 5000);
  });
};

/**
* async digunakan untuk memberitahukan ada proses asynchronous
* await digunakan untuk menunggu promise selesai
* await hanya bisa digunakan di dalam function
*/
const main = async () => {
  console.log(await persiapan());
  console.log(await rebusAir());
  console.log(await masak());
}

main();


//tidak di gunakan
/* producing promise
const persiapan = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Persiapan...");
    }, 3000);
  });
};

const rebusAir = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Rebus Air...");
    }, 7000);
  });
};

const masak = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Masak...");
    }, 5000);
  });
};

// consuming promise
const main = async () => {
  console.log(await persiapan());
  console.log(await rebusAir());
  console.log(await masak());
};

main();*/