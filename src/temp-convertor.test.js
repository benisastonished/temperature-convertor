import convertor from "./temperature-convertor.js";

const ABSOLUTE_ZERO = -459.67;
const TWICE_AS_HOT_AS_THE_HOTTEST_THING_ON_EARTH = 34e6;

describe("temperatureConvertor", () => {
  describe("ftoc", () => {
    it("should correctly convert 0F to C", () => {
      //arrange
      const cases = [
        [0, -17.78],
        [-1, 18.33],
        [ABSOLUTE_ZERO, 237.59],
        [TWICE_AS_HOT_AS_THE_HOTTEST_THING_ON_EARTH, 18888871.11]
      ];

      //act, assert
      test.each(cases)("given %p should return %p", ([f, c]) => {
        expect(convertor.ftoc(f)).toBeCloseTo(c);
      });
    });
  });
});
