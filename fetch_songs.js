const fs = require('fs');

const artists = [
  "justin bieber",
  "billie eilish",
  "sombr",
  "the weeknd",
  "air supply"
];

async function fetchSongs() {
  let allTracks = [];
  let id = 1;

  for (const artist of artists) {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(artist)}&entity=song&limit=5`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      const tracks = data.results.map(track => {
        const coverOriginal = track.artworkUrl100 || "";
        const coverHighQuality = coverOriginal.replace("100x100bb", "600x600bb");
        
        return {
          id: id++,
          title: track.trackName,
          artist: track.artistName,
          album: track.collectionName,
          duration: track.trackTimeMillis,
          cover: coverHighQuality,
          audioSrc: track.previewUrl
        };
      });
      allTracks = allTracks.concat(tracks);
    } catch (e) {
      console.error(`Error fetching for ${artist}:`, e);
    }
  }

  const jsContent = `const songs = ${JSON.stringify(allTracks, null, 2)};\n`;
  fs.writeFileSync('data.js', jsContent);
  console.log("Successfully created data.js with", allTracks.length, "songs.");
}

fetchSongs();
