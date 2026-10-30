// lib/utility/logger.ts
/**
 * Log a message to the Google Apps Script Logger.
 *
 * @param msg - The message to be logged
 * @returns Void
 *
 */
export function logInfo(msg: string, prefix=`[INFO] `): void {
  Logger.log(`${prefix}${msg}`);
}