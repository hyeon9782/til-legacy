// 여러개의 테스트를 묶을 때 사용 describe를 describe 묶는 것도 가능
describe("exoect test", () => {
  it("37 to equal 37", () => {
    expect(37).toBe(37);
  });

  // 객체는 참조형 변수이기 때문에 서로 가리키는 값이 다르다.
  // 그래서 toBe가 아니라 toEqual을 사용해야 한다.
  it("{age: 39} to equal {age: 39}", () => {
    //   expect({ age: 39 }).toBe({ age: 39 });
    expect({ age: 39 }).toEqual({ age: 39 });
  });

  // 앞에 들어오는 문자열의 길이를 테스트하게 해준다.
  it(".toHaveLength", () => {
    expect("hello").toHaveLength(5);
  });

  // 앞에 들어오는 객체의 key와 value가 맞는지 테스트
  it(".toHaveProperty", () => {
    expect({ name: "Mark" }).toHaveProperty("name");
    expect({ name: "Mark" }).toHaveProperty("name", "Mark");
  });

  // 앞에 들어오는 객체에서 name이라는 값이 있는지 테스트 해준다.
  it(".toBeDefined", () => {
    expect({ name: "Mark" }.name).toBeDefined();
  });

  // 앞에 들어오는 값이 falsy한 값인지 테스트
  it(".toBeFalsy", () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });

  // 앞에 들어온 값이 뒤에 들어온 값보다 큰지 테스트
  it(".toBeGreaterThan", () => {
    expect(10).toBeGreaterThan(9);
  });

  // 앞에 들어온 값이 뒤에 들어온 값보다 큰거나 같은지 테스트
  it(".toBeGreaterThanOrEqual", () => {
    expect(10).toBeGreaterThanOrEqual(10);
  });

  // 앞에 들어온 값이 뒤에 들어온 값보다 큰지 테스트
  // 에러를 상속받은 하위 에러
  // 에러의 자식인 에러를 찍은다음에 그 에러가 에러 타입인지
  // 정말 그 자식 에러 타입인지 테스트 ?
  it(".toBeInstanceOf", () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  });

  // not을 붙이면 반대의 의미로 사용할 수 있다.
  it(".not.toBe", () => {
    expect(37).not.toBe(31);
  });
});

// 최초의 방식이자 옛날 방식
// describe('use async test', () => {
//     it('setTimeout without done', () => {
//         setTimeout(() => {
//             expect(37).toBe(36);
//         },1000)
//     });

//     it("setTimeout with done", done => {
//       setTimeout(() => {
//         expect(37).toBe(36);
//         done();
//       }, 1000);
//     });  
// })

// async test with promise 방식 - 1
// describe('use async test', () => {
//     it('promise then', () => {
//         function p() {
//             return new Promise(resolve => {
//                 setTimeout(() => {
//                     resolve(37);
//                 },1000);
//             });
//         }
//         return p().then(data => expect(data).toBe(37));
//     })

//     it("promise catch", () => {
//       function p() {
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             reject(new Error('error'));
//           }, 1000);
//         });
//       }
//       return p().catch(e => expect(e).toBeInstanceOf(Error))
//     });
// })

// async test with promise 방식 - 2
// describe('use async test', () => {
//     it('promise .resolves', () => {
//         function p() {
//             return new Promise(resolve => {
//                 setTimeout(() => {
//                     resolve(37);
//                 },1000);
//             });
//         }
//         return expect(p()).resolves.toBe(37);
//     })

//     it("promise .rejects", () => {
//       function p() {
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             reject(new Error('error'));
//           }, 1000);
//         });
//       }
//       return expect(p()).rejects.toBeInstanceOf(Error)
//     });

// })

// async test with async-await
// 가장 좋은 방식이자 최근 방식
describe('use async test', () => {
    it('async-await', async () => {
        function p() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(37);
                },1000);
            });
        }

        const data = await p();
        return expect(data).toBe(37)
    })
})

describe("use async test", () => {
  it("async-await, catch", async () => {
    function p() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('error'));
        }, 1000);
      });
    }

    try {
        await p();
    } catch (error) {
        expect(error).toBeInstanceOf(Error);
    }
  });
});

