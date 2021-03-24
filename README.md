## decrypt-tracks

## Installation

```bash
$ yarn add decrypt-tracks
```

## Methods

### `.getTrackDownloadUrl(track, quality);`

| Parameters | Required |        Type |                        Description |
| ---------- | :------: | ----------: | ---------------------------------: |
| `track`    |   Yes    |    `string` |                       track object |
| `quality`  |   Yes    | `1, 3 or 9` | 1 = 128kbps, 3 = 320kbps, 9 = flac |

### `.decryptDownload(data, song_id);`

| Parameters | Required |     Type |            Description |
| ---------- | :------: | -------: | ---------------------: |
| `data`     |   Yes    | `buffer` | downloaded song buffer |
| `song_id`  |   Yes    | `string` |               track id |
