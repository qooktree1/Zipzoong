import { Carousel } from "flowbite-react"

export default function Tutorial() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 flex flex-col justify-center my-14">
        <div className="flex text-primary-700 justify-center font-extrabold text-3xl">
          π νν λ¦¬μΌ{" "}
        </div>
        <div className="h-[45rem]">
          <Carousel slide={false}>
            <div className="w-full flex shadow-md rounded-3xl">
              <div className="w-1/5 bg-primary-100 p-10 rounded-tl-3xl rounded-bl-3xl">
                <span className="text-9xl font-bold text-white">1</span>
                <p className="mt-5">
                  μ κ· κ·Έλ£Ήμ μμ±νκ±°λ μ΄λ λ§ν¬λ₯Ό ν΅ν΄ μΉκ΅¬μ κ·Έλ£Ήμ
                  κ°μν©λλ€.
                </p>
                <p className="mt-5">κ·Έλ£Ήμ μ΅λ 5κ°κΉμ§ κ°μ κ°λ₯ν©λλ€.</p>
              </div>
              <img
                src="/images/tutorial/tutorial1.gif"
                alt=""
                className="w-4/5 rounded-tr-3xl rounded-br-3xl"
              />
            </div>
            <div className="w-full flex shadow-md rounded-3xl">
              <div className="w-1/5 bg-primary-200 p-10 rounded-tl-3xl rounded-bl-3xl">
                <span className="text-9xl font-bold text-white">2</span>
                <p className="mt-5">
                  κ·Έλ£Ή νμ΄μ§μ μ΄λ λ£¨ν΄ κ΄λ¦¬ λ²νΌμ λλ¬ λ£¨ν΄μ λ§λ€κ±°λ μμ ,
                  μ­μ  ν  μ μμ΅λλ€.
                </p>
                <p className="mt-5">
                  μνλ μ’λͺ©μ λλ¬ μΆκ°ν ν κ°μλ₯Ό μ€μ ν΄λ³΄μΈμ.
                </p>
              </div>
              <img
                src="/images/tutorial/tutorial2.gif"
                alt=""
                className="w-4/5 rounded-tr-3xl rounded-br-3xl"
              />
            </div>
            <div className="w-full flex shadow-md rounded-3xl">
              <div className="w-1/5 bg-primary-300 p-10 rounded-tl-3xl rounded-bl-3xl">
                <span className="text-9xl font-bold text-white">3</span>
                <p className="mt-5">μ΄λ λ°©μ κ°μ€ν΄λ³΄μΈμ.</p>
                <p className="mt-5">
                  λ°©μ₯μ΄ μ νν λ£¨ν΄μ λ§μΆ° λ€ κ°μ΄ μ΄λμ ν  μ μμ΅λλ€.
                </p>
              </div>
              <img
                src="/images/tutorial/tutorial3.gif"
                alt=""
                className="w-4/5 rounded-tr-3xl rounded-br-3xl"
              />
            </div>
            <div className="w-full flex shadow-md rounded-3xl">
              <div className="w-1/5 bg-primary-400 p-10 rounded-tl-3xl rounded-bl-3xl">
                <span className="text-9xl font-bold text-white">4</span>
                <p className="mt-5">
                  μ΄λμ΄ λλ ν μ΄λ κ²°κ³Ό νμ΄μ§μμ μμ κ³Ό λͺ¨λμ λ¬μ±λ₯ μ
                  νμΈν  μ μμ΅λλ€.
                </p>
              </div>
              <img
                src="/images/tutorial/tutorial4.gif"
                alt=""
                className="w-4/5 rounded-tr-3xl rounded-br-3xl"
              />
            </div>
            <div className="w-full flex shadow-md rounded-3xl">
              <div className="w-1/5 bg-primary-500 p-10 rounded-tl-3xl rounded-bl-3xl">
                <span className="text-9xl font-bold text-white">5</span>
                <p className="mt-5">
                  λ§μ΄ νμ΄μ§μμ λ§€μΌλ§€μΌ λ΄κ° ν μ΄λκ³Ό μκ°μ νμΈν΄λ³Ό μ
                  μμ΅λλ€. μ΄λμ νλ©΄ λ°λ‘ λμ₯μ΄ μ°νλλ€.
                </p>
              </div>
              <img
                src="/images/tutorial/tutorial5.gif"
                alt=""
                className="w-4/5 rounded-tr-3xl rounded-br-3xl"
              />
            </div>
            <div className="w-full flex shadow-md rounded-3xl">
              <div className="w-1/5 bg-primary-600 p-10 rounded-tl-3xl rounded-bl-3xl">
                <span className="text-9xl font-bold text-white">6</span>
                <p className="mt-5 text-gray-300">
                  κ·Έλ£Ή νμ΄μ§μμ μ€λ μ΄λμ μ§νν λ©€λ²μ μ΄λ¦νμλ μμμ΄
                  μΉ ν΄μ§λλ€.
                </p>
                <p className="mt-5 text-gray-300">
                  λͺ¨λ  λ©€λ²κ° μ΄λμ μ§ννμμ μ λ°€ 12μκ° μ§λλ©΄ μΊλ¦°λμ
                  λμ₯μ΄ μ°νλλ€.
                </p>
              </div>
              <img
                src="/images/tutorial/tutorial6.gif"
                alt=""
                className="w-4/5 rounded-tr-3xl rounded-br-3xl"
              />
            </div>
            <div className="w-full flex shadow-md rounded-3xl">
              <div className="w-1/5 bg-primary-700 p-10 rounded-tl-3xl rounded-bl-3xl">
                <span className="text-9xl font-bold text-white">7</span>
                <p className="mt-5 text-gray-300">
                  νΉμ  μ‘°κ±΄μ λ¬μ±ν΄μ μ¨κ²¨μ§ μμ΄μ½μ΄λ μ€νΈλ¦­ μ€λλ₯Ό νλν  μ
                  μμ΅λλ€.
                </p>
                <p className="mt-5 text-sm text-gray-300">
                  (μ€λκ° μμ κ²½μ° λͺ¨λκ° μ΄λμ νμ§ μμ λ λ μ€νΈλ¦­μ΄
                  μ μ§λ©λλ€.)
                </p>
              </div>
              <img
                src="/images/tutorial/tutorial7.gif"
                alt=""
                className="w-4/5 rounded-tr-3xl rounded-br-3xl"
              />
            </div>
            <div className="w-full flex shadow-md rounded-3xl">
              <div className="w-1/5 bg-primary-800 p-10 rounded-tl-3xl rounded-bl-3xl">
                <span className="text-9xl font-bold text-white">8</span>
                <p className="mt-5 text-gray-300">
                  λͺμμ μ λΉμμ κ·Έλ£Ήκ³Ό κ°μΈμ λ­νΉμ νμΈν΄ λ³Ό μ μμ΅λλ€.
                </p>
                <p className="mt-5 text-gray-300">
                  λ§€μΌλ§€μΌ μ΄λμ μ΄μ¬ν ν΄μ λ­νΉμ λ¬μ±ν΄λ³΄μΈμ!
                </p>
              </div>
              <img
                src="/images/tutorial/tutorial8.gif"
                alt=""
                className="w-4/5 rounded-tr-3xl rounded-br-3xl"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
