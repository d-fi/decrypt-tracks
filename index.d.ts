/// <reference types="node" />
export declare const getSongFileName: (track: any, quality: number) => any;
/**
 *
 * @param source Downloaded song from `getTrackDownloadUrl`
 * @param trackId Song ID as string
 */
export declare const decryptDownload: (
  source: Buffer,
  trackId: string
) => Buffer;
/**
 * @param track Track info json returned from `getTrackInfo`
 * @param quality 1 = 128kbps, 3 = 320kbps and 9 = flac (around 1411kbps)
 */
export declare const getTrackDownloadUrl: (
  track: any,
  quality: number
) => string;
