const fetchData = async () => {
  console.time("=== 개별 Promise 각각 ===");
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("성공!!");
    }, 2000);
  });

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("성공!!");
    }, 3000);
  });

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("성공!!");
    }, 1000);
  });
  console.timeEnd("=== 개별 Promise 각각 ===");

  console.log("드디어 모두 끝났습니다!!!");
};

// fetchData();

const fetchData2 = async () => {
  console.time("=== 한방에 Promise.all ===");
  await Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("성공!!");
      }, 2000);
    }),

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("성공!!");
      }, 3000);
    }),

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("성공!!");
      }, 1000);
    }),
  ]);
  console.timeEnd("=== 한방에 Promise.all ===");

  console.log("드디어 모두 끝났습니다!!!");
};

fetchData2();
