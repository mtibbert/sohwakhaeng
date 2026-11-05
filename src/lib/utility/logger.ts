// lib/utility/logger.ts
/**
 * Log a message to the Google Apps Script Logger.
 *
 * @example
 * logInfo('Foo')                   // returns [INFO] Foo
 * logInfo('Foo', `[BAR] `)         // returns [BAR] Foo
 * logInfo('Foo', prefix=`[BAR] `)  // returns [BAR] Foo
 *
 * @param msg - The message to be logged
 * @returns Void
 */
export function logInfo(msg: string, prefix=`[INFO] `): void {
  Logger.log(`${prefix}${msg}`);
}