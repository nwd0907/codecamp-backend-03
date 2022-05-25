// 1. 메소드 데코레이터에 들어갈 수 있는 화살표 함수
function zzz() {
  return function (target, property) {
    console.log(target); // 해당 클래스
    console.log(property); // 해당 메소드 이름
  };
}

class Aaa {
  @zzz()
  getHello1() {
    console.log("안녕하세요~");
  }

  @zzz()
  getHello2 = () => {
    console.log("반갑습니다~");
  };
}

//
//
//
// 2. 메소드 데코레이터에 들어갈 수 없는 화살표 함수(descriptor를 받는 경우)
function qqq() {
  return function (target, property, descriptor) {
    console.log(target); // 해당 클래스
    console.log(property); // 해당 메소드 이름
    console.log(descriptor); // 해당 메소드 정보(함수 내용 포함)
  };
}

class Bbb {
  @qqq()
  getHello1() {
    console.log("안녕하세요~");
  }

  @qqq() // descriptor 에서 거부됨
  getHello2 = () => {
    console.log("반갑습니다~");
  };
}

//
//
//
// 3. descriptor 에서 자체적으로 금지하는 이유(descriptor를 통한 메소드 재정의시, this 바인딩의 스코프 문제가 발생할 수 있기 때문)
function rrr(bbb) {
  const qwer = {
    age: 5,
    myfunction: bbb,
  };
  qwer.myfunction();
}

class Ccc {
  age = 10;

  callAge1() {
    console.log("철수 " + this.age + "살");
  }

  callAge2 = () => {
    console.log("철수 " + this.age + "살");
  };
}

const ccc = new Ccc();
rrr(ccc.callAge1); // 철수 5살
rrr(ccc.callAge2); // 철수 10살
