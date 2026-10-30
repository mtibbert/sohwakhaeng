/**
 * Log a message to the Google Apps Script Logger.
 *
 * @param msg - The message to be logged
 * @returns Void
 *
 */
export function logInfo(msg: string): void {
  Logger.log(`[INFO] ${msg}`);
}