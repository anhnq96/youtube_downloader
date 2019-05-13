const fs = require('fs');
const ytdl = require('ytdl-core');
const moment = require('moment');

class YoutubeDownload {
    /**
     * get video info*/
    getInfo(req, res) {
        var url = req.body.url;
        console.log(url);
        ytdl.getInfo(url, { filter: (format) => format.container === 'mp4' || format.container === 'webm' }, function (error, info) {
            var detail = info.player_response.videoDetails;
            var duration = moment.utc(detail.lengthSeconds * 1000).format('HH:mm:ss');

            var formats = {
                mp4: [],
                webm: []
            };
            var videoData = {
                url: info.video_url,
                title: detail.title,
                duration: duration,
                thumbnail: detail.thumbnail.thumbnails[detail.thumbnail.thumbnails.length - 1],
            };
            // console.log(videoData.thumbnail);

            res.render('info', videoData);
        })
    }
    /**
     * Download video from youtube
     * */
    download(req, res) {
        var url = req.body.url;
        var format = req.body.format;
        var quality = req.body.quality;
        var title = req.body.title;
        var extension = quality == 'highest' ? '.mp4' : '.webm';
        var filename = 'filename="' + encodeURIComponent(title) + extension + '"';

        console.log('url', filename);
        res.header('Content-Disposition', 'attachment; ' + filename);
        ytdl(url, {format, quality}).pipe(res);
    }
}

module.exports = new YoutubeDownload();