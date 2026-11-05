// src/gs-tests/lib/utility/logger.test.ts

import { logInfo } from "../../../../utility/logger"

/** An immutable array of strings. */
type ImmutableStringArray = ReadonlyArray<string>;

export class LogInfoHelp {
  static PREFIX = "[DOC] ";
  static TOPICS: ImmutableStringArray = Object.freeze(
      ["logFunction", "logInfo"]);

  private static logFunction_Help: string =
      `static function logInfo(msg: string, prefix='[INFO]')`;  // [INFO] Fo
  private static logInfo_Help: string =
      `function logInfo(msg: string, prefix='[INFO]'): string -> ` +
      `Log a message to the Google Apps Script Logger.` +
      `  | Example: logInfo('Foo')`;  // [INFO] Fo
  private static TOPICMAP = {
    "logFunction": LogInfoHelp.logFunction_Help,
    "logInfo": LogInfoHelp.logInfo_Help};
  /**
   * Return topic help.
   *
   * @param topic {string} Topic, in vocabulary of TOPICS.
   * @param toLog {boolean} Display help in loh (true/default), or return string.
   * @return {string} "" if toLog is true; else full help text.
   */
  static topicHelp(topic: string, toLog = true, prefix = this.PREFIX) {
    let returnStr = LogInfoHelp.TOPICS.includes(topic) ?
        LogInfoHelp.TOPICMAP[topic] :
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
   * @param toLog {boolean} Display help in log (true/default), or return string.
   * @return {string} "" if toLog is true; else full help text.
   */
  static topicHelpAll(toLog = true, prefix = this.PREFIX) {
    let returnStr = "";
    for (const topic of LogInfoHelp.TOPICS) {
      returnStr = returnStr == "" ?
          LogInfoHelp.topicHelp(topic, toLog, prefix) :
          `${returnStr}\n  - ${LogInfoHelp.topicHelp(topic, toLog, prefix)}`
    }
    if (toLog) {
      logInfo(returnStr, prefix);
      logInfo(`End of static functions documentation`,
                    `${prefix.slice(0, -2)}-End] `);
      returnStr = "";
    }
    return returnStr;
  }
}