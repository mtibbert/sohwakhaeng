// src/lib/utility/date/dateUtility.ts

/** An immutable array of strings. */
type ImmutableStringArray = ReadonlyArray<string>;

/**
 * @class DateUtility
 *
 * utilities related to Date objects.
 *
 */
export class DateUtility {
    /**
     * An immutable array of strings representing the name of the
     * days of the week (Sunday through Saturday).
     *
     * @static
     * @type { ImmutableStringArray }
     * */
    static DAY_OF_WEEK_NAME: ImmutableStringArray = Object.freeze(
        ["Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"]);

    /**
     * Calculate the day of the week (0 to 6) for Date.
     *
     * @example
     * DateUtility.asDow(new Date(1976, 9, 1))  // returns 4
     *
     * @param {dto} Date - Date to evaluate.
     * @returns {int} a integer value where 0 <= value <= 6.
     */
    static asDow(dto: Date): number {
        return dto.getDay();
    }
    /**
     * Calculate the name of the day of week for the provided date.
     *
     * @example DateUtility.asDowName(new Date(1976, 9, 1))  // returns Wednesday
     *
     * @param {dto} Date - Date to evaluate.
     * @returns {string} in the vocabulary
     *                   ["Sunday", "Monday", "Tuesday", "Wednesday",
     *                    "Thursday", "Friday", "Saturday"].
     *
     */
    static asDowName(dto: Date): string {
        const idx = DateUtility.asDow(dto);
        return DateUtility.DAY_OF_WEEK_NAME[idx];
    }
}