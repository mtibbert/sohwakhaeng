// src/gs-tests/lib/utility/date/dateUtility.ts

import {DateUtility} from "../../../../../../lib/utility/date/dateUtility"
import {logInfo} from "../../../../../../lib/utility/logger"

/** An immutable array of strings. */
type ImmutableStringArray = ReadonlyArray<string>;

export class DateUtilityHelp {
    static PREFIX = "[DOC] ";
    static TOPICS:ImmutableStringArray = Object.freeze(
        ["class", "type_immutableStringArray", "DAY_OF_WEEK_NAME",
         "asDow", "asDowName"]);
    private static class_Help:string =
        `@class DateUtility -> Utilities related to Date objects.`;
    private static type_immutableStringArray_Help =
        "type ImmutableStringArray: ReadonlyArray<string>";
    private static DAY_OF_WEEK_NAME_Help:string =
        `static DAY_OF_WEEK_NAME:ImmutableStringArray -> `+
        `Days of the week (${DateUtility.DAY_OF_WEEK_NAME.join((', '))}).`;
    private static asDow_Help: string =
        `static asDow(dto: Date): number -> ` +
        `Calculate the day of the week (0 to 6) for Date.` +
        `  | Example: DateUtility.asDow(new Date(2026, 11, 1));      // '0'`;
    private static asDowName_Help: string =
        `static asDowName(dto: Date): string -> ` +
        `Calculate the name of the day of week for Date.` +
        `  | Example: DateUtility.asDowName(new Date(2026, 11, 1));  // 'Sunday'`;
    private static TOPICMAP = {
        "type_immutableStringArray": DateUtilityHelp.type_immutableStringArray_Help,
        "DAY_OF_WEEK_NAME": DateUtilityHelp.DAY_OF_WEEK_NAME_Help,
        "class": DateUtilityHelp.class_Help,
        "asDow": DateUtilityHelp.asDow_Help,
        "asDowName": DateUtilityHelp.asDowName_Help};
    /**
     * Return topic help.
     *
     * @param topic {string} Topic, in vocabulary of TOPICS.
     * @param toLog {boolean} Display help in loh (true/default), or return string.
     * @return {string} "" if toLog is true; else full help text.
     */
    static topicHelp(topic:string, toLog=true, prefix = this.PREFIX) {
        let returnStr = DateUtilityHelp.TOPICS.includes(topic) ?
                                               DateUtilityHelp.TOPICMAP[topic] :
                                               "";
        ;
        if (toLog) {
            logInfo(returnStr, prefix);
            returnStr = "";
        }
        return returnStr;
    }
    /**
     * Return all Help topics.
     *
     * @param toLog {boolean} Display help in loh (true/default), or return string.
     * @return {string} "" if toLog is true; else full help text.
     */
    static topicHelpAll(toLog=true, prefix = this.PREFIX) {
        let returnStr = "";
        for (const topic of DateUtilityHelp.TOPICS){
            returnStr = returnStr == "" ?
                DateUtilityHelp.topicHelp(topic, toLog, prefix) :
                `${returnStr}\n  - ${DateUtilityHelp.topicHelp(topic, toLog, prefix)}`
        }
        if (toLog) {
            logInfo(returnStr, prefix);
            logInfo(`End of class documentation`, `${prefix.slice(0,-2)}-End] `);
            returnStr = "";
        }
        return returnStr;
    }
}