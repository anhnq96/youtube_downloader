import ytdl from 'ytdl-core';

class youtubeController {
    /**
     * Get youtube video info
     * @param [string] url
     * @return [json] info
     * */
    async getInfo(url) {
        let info = await ytdl.getInfo(url);
        return info;
    }
}

export default new youtubeController();