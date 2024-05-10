// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());

app.get('/artists', (req, res) => {
  const getArtist = getAllArtists()
  res.send(getArtist)
})

app.post('/artists', (req, res) => {
  const data = req.body
  const add = addArtist(data)
  res.status(201)
  res.send(add)
})

app.get('/artists/latest', (req, res) => {
  const getlatest = getLatestArtist()
  res.send(getlatest)
})

app.get('/artists/latest/albums', (req, res) => {
  const latestAlbums = getAlbumsForLatestArtist()
  res.send(latestAlbums)
})


app.get('/artists/:artistId', (req, res) => {
  const artist = req.params.artistId
  const getArtist = getArtistByArtistId(artist)
  res.send(getArtist)
})

app.put('/artists/:artistID', (req, res) => {
  const artist = req.params.artistID
  const data = req.body
  const update = editArtistByArtistId(artist, data)
  res.send(update)
})

app.patch('/artists/:artistID', (req, res) => {
  const artist = req.params.artistID
  const data = req.body
  const update = editArtistByArtistId(artist, data)
  res.send(update)
})

app.delete('/artists/:artistId', (req, res) => {
  const artist = req.params.artistId
  deleteArtistByArtistId(artist)
  res.body = {
    "message": "Successfully deleted"
  }
  res.send(res.body)
})

app.get('/artists/:artistId/albums', (req, res) => {
  const artist = req.params.artistId
  const update = getAlbumsByArtistId(artist)
  res.send(update)
})

app.get('/albums/:albumId', (req, res) => {
  const album = req.params.albumId
  const getAlbum = getAlbumByAlbumId(album)
  res.send(getAlbum)
})

app.post('/artists/:artistId/albums', (req, res) => {
  const artist = req.params.artistId
  const body = req.body
  const addAlbum = addAlbumByArtistId(artist, body)
  res.status(201)
  res.send(addAlbum)
})

app.patch('/albums/:albumId', (req, res) => {
  const album = req.params.albumId
  let data = req.body
  const editAlbum = editAlbumByAlbumId(album, data)

  res.send(editAlbum)

})

app.put('/albums/:albumId', (req, res) => {
  const album = req.params.albumId
  let data = req.body
  const editAlbum = editAlbumByAlbumId(album, data)

  res.send(editAlbum)

})

app.delete('/albums/:albumId', (req, res) => {
  const album = req.params.albumId
  deleteAlbumByAlbumId(album)
  res.body = {
    "message": "Successfully deleted"
  }
  res.send(res.body)
})

app.get('/albums?', (req, res) => {
  const startsWith = req.query.startsWith
  console.log(startsWith)
  const filtered = getFilteredAlbums(startsWith)
  res.send(filtered)
})

app.get('/songs/:songId', (req, res) => {
  const song = req.params.songId
  const getSong = getSongBySongId(song)
  res.send(getSong)
})

app.post('/albums/:albumId/songs', (req, res) => {
  const album = req.params.albumId
  const song = req.body
  res.status(201)
  const addSong = addSongByAlbumId(album, song)
  res.send(addSong)
})

app.get('/artists/:artistId/songs', (req, res) => {
  const artist = req.params.artistId
  const getSongs = getSongsByArtistId(artist)
  res.send(getSongs)

})

app.get('/albums/:albumId/songs', (req, res) => {
  const album = req.params.albumId
  const getSongs = getSongsByAlbumId(album)
  res.send(getSongs)
})



app.put('/songs/:songId', (req, res) => {
  const song = req.params.songId
  const data = req.body
  const editSong = editSongBySongId(song, data)
  res.send(editSong)
})

app.patch('/songs/:songId', (req, res) => {
  const song = req.params.songId
  const data = req.body
  const editSong = editSongBySongId(song, data)
  res.send(editSong)
})



app.delete('/songs/:songId', (req, res) => {
  const songId = req.params.songId
  deleteSongBySongId(songId)
  res.body = {
    "message": "Successfully deleted"
  }
  res.send(res.body)
})





// DO NOT MODIFY
if (require.main === module) {
  const port = 8800;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
