function logProp(value) {
  console.log(value);
  return (t, p) => {
    console.log(JSON.stringify(Object.getOwnPropertyNames(t)));
    console.log(value + "t:", t);
    console.log(value + "p:", p);

    let v = t[p];
    console.log(value + "v:", v);

    let getter = function () {
      console.log(value + ":" + "안녕하세요");
      return v;
    };

    let setter = function (new_v) {
      v = new_v;
      console.log(value + ":" + "반갑습니다");
    };

    if (delete t[p]) {
      Object.defineProperty(t, p, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
      });
    }
  };
}

class Button {
  @logProp("111")
  type: string = "button";

  @logProp("222")
  version: string = "0.0.2";

  @logProp("333")
  getHello1(a, b, c) {
    return 123;
  }

  @logProp("444")
  getHello2 = (a, b, c) => {
    return 123;
  };

  constructor() {}
}

const btn = new Button();
console.log(btn.type);

btn.type = "바꿀래요";

const result1 = btn.getHello1(1, 2, 3);
console.log(result1);

const result2 = btn.getHello2(1, 2, 3);
console.log(result2);
