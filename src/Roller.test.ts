import {Roller} from './Roller';

describe("Smoke test", ()=> {
  test("The test scaffold runs successfully.", ()=> {
    expect(true).toBe(true);
  });
})

describe("Constructor test cases", ()=> {
  test("die have atleast 2 faces ", () => {
    const roller = new Roller(1);
    expect(roller.faces).toBe(6);
  });

  test(" set number of faces to 6 if empty is passed", () => {
    const roller = new Roller(0);
    expect(roller.faces).toBe(6);
  });

  test(" set number of faces to 6 if negative is passed", () => {
    const roller = new Roller(-1);
    expect(roller.faces).toBe(6);
  });

  test("check whether it set faces to correct value ", () => {
    const roller = new Roller(3);
    expect(roller.faces).toBe(3);
  });
});

describe("For roll function", ()=> {
  test("it return 0 if value is less than 1", ()=> {
    const roller = new Roller(3);
    expect(roller.roll(0)).toBe(0);
    expect(roller.last()).toBe(0);
    expect(roller.distribution().get(0)).toBeUndefined();
  });

  test("it return 0 if value is greater than faces", ()=> {
    const roller = new Roller(3);
    expect(roller.roll(4)).toBe(0);
  });

  test("check whether it sets correct value if roll between 1 and value inclusive ", () => {
    const roller = new Roller(3);
    expect(roller.roll(3)).toBe(3);
    expect(roller.last()).toBe(3);
  });

  test("check whether it sets correct value if roll between 1 and value inclusive ", () => {
    const roller = new Roller(4);
    expect(roller.roll(4)).toBe(4);
    expect(roller.last()).toBe(4);
  });
})

describe("last function ", ()=> {
  test("check whether returns correct value ", ()=> {
    const roller = new Roller(4);
    expect(roller.roll(4)).toBe(4);
    expect(roller.last()).toBe(4);
  });
  test("check whether returns correct value ", ()=> {
    const roller = new Roller(5);
    expect(roller.roll(5)).toBe(5);
    expect(roller.last()).toBe(5);
  });
})

describe("destribution function ", ()=> {
  test("check whether returns correct value ", ()=> {
    const roller = new Roller(4);
    expect(roller.roll(4)).toBe(4);
    expect(roller.last()).toBe(4);
    expect(roller.distribution().get(4)).toBe(1);
  });

  test("check whether returns correct value ", ()=> {
    const roller = new Roller(5);
    expect(roller.roll(5)).toBe(5);
    expect(roller.last()).toBe(5);
    expect(roller.distribution().get(5)).toBe(1);
  });
})