const { Pool } = require('pg');

class PlaylistSongsService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylistSongs(playlistId) {
    const query = {
      text: `SELECT songs.id, songs.title, songs.performer FROM songs 
            INNER JOIN playlistsongs ON playlistsongs.song_id = songs.id
            WHERE playlistsongs.playlist_id = $1
            GROUP BY songs.id`,
      values: [playlistId],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }
}

module.exports = PlaylistSongsService;
