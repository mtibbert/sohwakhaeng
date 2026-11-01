// tests/lib/utility/date/date.test.ts

import { DateUtility } from "../../../../src/lib/utility/date/date.ts"

import { skip, describe, it, expect } from 'vitest'

beforeEach(() => {
});

describe('DateUtility', () => {
    describe('static functions', () => {
        beforeEach(() => {
        });
        describe('asDow()', () => {
            let dto = new Date();
            let count = 8;               // Test next eight days.
            const bounds = [0, 6];      // Expect 0 <= value <= 6
            while (count > 0) {
                dto.setDate(dto.getDate() + 1);   // Increment date to test
                it(`returns an integer between 0 and 6 for ${dto}`, () => {
                    const actual = DateUtility.asDow(dto);
                    expect(actual).toBeGreaterThanOrEqual(bounds[0]);
                    expect(actual).toBeLessThan(bounds[1]);
                });
                count--;                          // Decrement counter
            }
        });
        describe('asDowName()', () => {
            const expected = [
                "Sunday", "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday"];
            it('returns a string', () => {
                const expectedDow = 1;
                const spy = vi.spyOn(DateUtility, 'asDow');
                spy.mockImplementation(() => expectedDow);
                const actual = DateUtility.asDowName(new Date());
                expect(typeof actual).toBe("string");
            })
            for (const [index, value] of expected.entries()) {
                it(`returns '${value}' when the day of week is ${index}.`, () => {
                    expect(DateUtility.DAY_OF_WEEK_NAME[index]).toEqual(value);
                })
            }
        });
    });
    describe('static properties', () => {
        describe('DAY_OF_WEEK_NAME', () => {
            const expected = ["Sunday", "Monday", "Tuesday", "Wednesday",
                              "Thursday", "Friday", "Saturday"]
            it(`contains seven (7) items'`, () => {
                expect(DateUtility.DAY_OF_WEEK_NAME.length).toEqual(expected.length)
            });
            for (const [index, value] of expected.entries()) {
                it(`contains '${value}' at DAY_OF_WEEK_NAME[${index}].`, () => {
                    expect(DateUtility.DAY_OF_WEEK_NAME[index]).toEqual(value);
                })
            }
            for (const [index, value] of expected.entries()) {
                const errMsg = `Cannot add property undefined, ` +
                               `object is not extensible`;
                it(`DAY_OF_WEEK_NAME[${index}] is immutable.`, () => {
                    function fn(idx) {
                        DateUtility.DAY_OF_WEEK_NAME[idx] =
                            `${DateUtility.DAY_OF_WEEK_NAME[idx]}x`;}
                    expect(fn).toThrow(TypeError(errMsg));
                })
            }
        });
    });
});