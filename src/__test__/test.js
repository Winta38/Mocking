import getLevel from "../main";
import fetchData from "../http";

jest.mock("../http");

beforeEach(() => {
  jest.resetAllMocks();
});

test("getLevel should give an error", () => {
  fetchData
    .mockReturnValueOnce(new Error())
    .mockReturnValueOnce({ status: "ok", level: 15 });
  expect(getLevel("ру")).toBe("Информация об уровне временно недоступна");
  expect(getLevel("1")).toBe("Ваш текущий уровень: 15");
});
