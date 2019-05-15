const ytdl = require('ytdl-core');
const moment = require('moment');

class YoutubeDownload {
    /**
     * get video info
     * */
    getInfo(req, res) {
        let url = req.body.url;
        ytdl.getInfo(url, {filter: (format) => format.container === 'mp4' || format.container === 'webm'}, (error, info) => {
            if (error) {
                res.send('Your url is not valid, please input a youtube url');
                return;
            }
            let detail = info.player_response.videoDetails;
            let duration = moment.utc(detail.lengthSeconds * 1000).format('HH:mm:ss');
            let formats = {
                mp4: [],
                webm: []
            };
            info.formats.map((format) => {
                if (format.container == 'mp4' && format.quality_label && format.itag && format.clen) {
                    formats.mp4.push({
                        quality_label: format.quality_label,
                        itag: format.itag,
                        clen: this.convertByToSize(format.clen)

                    })
                } else if (format.container == 'webm' && format.quality_label && format.itag && format.clen) {
                    formats.webm.push({
                        quality_label: format.quality_label,
                        itag: format.itag,
                        clen: this.convertByToSize(format.clen)
                    })
                }
            });
            let videoData = {
                url: info.video_url,
                title: detail.title,
                duration: duration,
                thumbnail: detail.thumbnail.thumbnails[detail.thumbnail.thumbnails.length - 1],
                formats
            };
            res.render('info', videoData);
        });
    }

    /**
     * Download video from youtube
     * */
    download(req, res) {
        let url = req.body.url;
        let format = req.body.format;
        let quality = req.body.quality;
        let title = req.body.title;
        let filename = 'filename="' + encodeURIComponent(title) + format + '"';

        console.log('url', filename);
        res.header('Content-Disposition', 'attachment; ' + filename);
        ytdl(url, {format, quality}).pipe(res);
    }

    /**
     * Convert by to Size
     * @param [integer] byte
     * @return number size
     * */
    convertByToSize(bytes) {
        let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) {
            return 0;
        }
        let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        if (i == 0) {
            return bytes + ' ' + sizes[i];
        }
        return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];


    }
}

module.exports = new YoutubeDownload();