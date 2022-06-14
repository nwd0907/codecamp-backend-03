// console.log("안녕하세요~");

// import axios from "axios";

// axios.post().then((res) => {});

// await axios.get();

///////////////

// const aaa = async () => {
//   const result = await new Promise((resolve, reject) => {
//     // 뭔가 특정 작업(API 보내기 등)
//     //   if (성공!!) {
//     resolve("철수");
//     //   }
//     //   if (실패!!) {
//     // reject("에러에요!!");
//     //   }
//   });
// };

const fetchData = async () => {
  console.log("여기는 1번!!");
  await new Promise((resolve, reject) => {
    // XMLHttpRequest
    // 뭔가 특정 작업(API 보내기 등)
    setTimeout(() => {
      console.log("여기는 2번!!");
      try {
        resolve("성공시 받는 데이터");
      } catch (error) {
        reject("실패했습니다!!!");
      }
    }, 2000);
  });
  console.log("여기는 3번");
};

fetchData();
