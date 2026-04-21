const allTracks = [
  // Justin Bieber
  { id: 0, title: "Peaches", artist: "Justin Bieber", album: "Justice", duration: 198000, cover: "images/JUSTIN BEIBER.jpg", audioSrc: "music/Justin Bieber - Peaches ft. Daniel Caesar, Giveon [tQ0yjYUFKAE].mp3" },
  { id: 1, title: "Sorry", artist: "Justin Bieber", album: "Purpose", duration: 200000, cover: "images/JUSTIN BEIBER.jpg", audioSrc: "music/Justin Bieber - Sorry (Lyric Video).mp3" },
  { id: 2, title: "Love Yourself", artist: "Justin Bieber", album: "Purpose", duration: 233000, cover: "images/JUSTIN BEIBER.jpg", audioSrc: "music/Justin Bieber - Love Yourself (PURPOSE ： The Movement).mp3" },
  { id: 3, title: "Favourite Girl", artist: "Justin Bieber", album: "Purpose", duration: 233000, cover: "images/JUSTIN BEIBER.jpg", audioSrc: "music/Justin Bieber - Favorite Girl (Lyrics).mp3" },
  { id: 4, title: "Baby", artist: "Justin Bieber", album: "My World 2.0", duration: 214000, cover: "images/JUSTIN BEIBER.jpg", audioSrc: "music/Justin Bieber - Baby ft. Ludacris.mp3" },

  // Billie Eilish
  { id: 5, title: "What Was I Made For", artist: "Billie Eilish", album: "Barbie", duration: 222000, cover: "images/BILLIE EILISH.png", audioSrc: "music/Billie Eilish - What Was I Made For？ (Official Music Video).mp3" },
  { id: 6, title: "everything i wanted", artist: "Billie Eilish", album: "everything i wanted", duration: 245000, cover: "images/BILLIE EILISH.png", audioSrc: "music/Billie Eilish - everything i wanted.mp3" },
  { id: 7, title: "lovely", artist: "Billie Eilish & Khalid", album: "lovely", duration: 200000, cover: "images/BILLIE EILISH.png", audioSrc: "music/Billie Eilish, Khalid - lovely.mp3" },
  { id: 8, title: "Happier Than Ever", artist: "Billie Eilish", album: "Happier Than Ever", duration: 298000, cover: "images/BILLIE EILISH.png", audioSrc: "music/Billie Eilish - Happier Than Ever (Official Music Video).mp3" },
  { id: 9, title: "ocean eyes", artist: "Billie Eilish", album: "dont smile at me", duration: 200000, cover: "images/BILLIE EILISH.png", audioSrc: "music/Billie Eilish - ocean eyes (Official Music Video).mp3" },

  // Sombr
  { id: 10, title: "12 to 12", artist: "sombr", album: "sombr hits", duration: 175000, cover: "images/SOMBR.jpg", audioSrc: "music/sombr - 12 to 12 (official video).mp3" },
  { id: 11, title: "Homewrecker", artist: "sombr", album: "sombr hits", duration: 184000, cover: "images/SOMBR.jpg", audioSrc: "music/sombr - Homewrecker (official video).mp3" },
  { id: 12, title: "back to friends", artist: "sombr", album: "sombr hits", duration: 153000, cover: "images/SOMBR.jpg", audioSrc: "music/sombr - back to friends (official video).mp3" },
  { id: 13, title: "undressed", artist: "sombr", album: "sombr hits", duration: 162000, cover: "images/SOMBR.jpg", audioSrc: "music/sombr - undressed (official video).mp3" },
  { id: 14, title: "we never dated", artist: "sombr", album: "sombr hits", duration: 144000, cover: "images/SOMBR.jpg", audioSrc: "music/sombr - we never dated (official lyric video).mp3" },

  // The Weeknd
  { id: 15, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: 200000, cover: "images/THE WEEKND.jpg", audioSrc: "music/The Weeknd - Blinding Lights (Lyrics).mp3" },
  { id: 16, title: "Call Out My Name", artist: "The Weeknd", album: "My Dear Melancholy", duration: 230000, cover: "images/THE WEEKND.jpg", audioSrc: "music/The Weeknd - Call Out My Name (Official Video).mp3" },
  { id: 17, title: "Can't Feel My Face", artist: "The Weeknd", album: "Beauty Behind the Madness", duration: 215000, cover: "images/THE WEEKND.jpg", audioSrc: "music/The Weeknd - Can't Feel My Face (Official Video).mp3" },
  { id: 18, title: "Die For You", artist: "The Weeknd", album: "Starboy", duration: 260000, cover: "images/THE WEEKND.jpg", audioSrc: "music/The Weeknd - Die For You.mp3" },
  { id: 19, title: "One Of The Girls", artist: "The Weeknd", album: "The Idol", duration: 242000, cover: "images/THE WEEKND.jpg", audioSrc: "music/The Weeknd, JENNIE, Lily-Rose Depp - One Of The Girls (Official Video).mp3" },

  // Air Supply
  { id: 20, title: "All Out Of Love", artist: "Air Supply", album: "Lost In Love", duration: 243000, cover: "images/Air_Supply_Greatest_Hits.jpg", audioSrc: "music/Air Supply - All Out Of Love (Official HD Video).mp3" },
  { id: 21, title: "Even The Nights Are Better", artist: "Air Supply", album: "Now and Forever", duration: 238000, cover: "images/Air_Supply_Greatest_Hits.jpg", audioSrc: "music/Air Supply - Even The Nights Are Better (Official Video).mp3" },
  { id: 22, title: "Every Woman in the World", artist: "Air Supply", album: "Lost In Love", duration: 232000, cover: "images/Air_Supply_Greatest_Hits.jpg", audioSrc: "music/Air Supply - Every Woman in the World (Lyrics).mp3" },
  { id: 23, title: "Making Love Out Of Nothing At All", artist: "Air Supply", album: "Greatest Hits", duration: 343000, cover: "images/Air_Supply_Greatest_Hits.jpg", audioSrc: "music/Air Supply - Making Love Out Of Nothing At All (Official HD Video).mp3" },
  { id: 24, title: "Lost In Love", artist: "Air Supply", album: "Lost In Love", duration: 232000, cover: "images/Air_Supply_Greatest_Hits.jpg", audioSrc: "music/Air Supply - _Lost In Love_ (Official Video).mp3" }
];

let currentTrackIndex = -1;
const audio = document.getElementById('audio-player');

const tracksContainer = document.getElementById('tracks-container');
const playBtn = document.getElementById('btn-play');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
const playIcon = document.getElementById('play-icon');
const playAllBtn = document.getElementById('btn-play-all');

const npCover = document.getElementById('np-cover');
const npTitle = document.getElementById('np-title');
const npArtist = document.getElementById('np-artist');

const progressBar = document.getElementById('progress-bar');
const progressFill = document.getElementById('progress-fill');
const timeCurrent = document.getElementById('time-current');
const timeTotal = document.getElementById('time-total');

const volumeBar = document.getElementById('volume-bar');
const volumeFill = document.getElementById('volume-fill');

function initApp() {
  setGreeting();
  renderTracks();
  setupEventListeners();

  // Set default audio volume
  audio.volume = 1;
  volumeFill.style.width = '100%';
}

function renderTracks() {
  tracksContainer.innerHTML = '';

  allTracks.forEach((track, index) => {
    const div = document.createElement('div');
    div.className = 'track-item';
    div.dataset.index = index;
    div.style.animationDelay = `${(index % 10) * 0.05}s`;

    div.innerHTML = `
      <div class="track-number">${index + 1}</div>
      <div class="track-info">
        <img src="${track.cover}" class="track-cover" alt="Cover" loading="lazy">
        <div class="track-details">
          <div class="track-title">${track.title}</div>
          <div class="track-artist">${track.artist}</div>
        </div>
      </div>
      <div class="track-album">${track.album}</div>
      <div class="track-duration">${formatTime(track.duration)}</div>
    `;

    div.addEventListener('click', () => {
      playTrack(index);
    });

    tracksContainer.appendChild(div);
  });
}

function playTrack(index) {
  if (index < 0 || index >= allTracks.length) return;

  currentTrackIndex = index;
  const track = allTracks[index];

  audio.src = track.audioSrc;

  // Notice gracefully failing if local file doesn't exist yet
  audio.play().catch(e => {
    console.log("Audio file missing for:", track.audioSrc);
    alert(`Please download and place "${track.audioSrc}" inside your project folder to hear this song!`);
  });

  document.querySelectorAll('.track-item').forEach(el => el.classList.remove('playing'));
  const currentEl = document.querySelector(`.track-item[data-index="${index}"]`);
  if (currentEl) currentEl.classList.add('playing');

  npCover.src = track.cover;
  npCover.classList.remove('hidden');
  npTitle.textContent = track.title;
  npTitle.classList.remove('placeholder-text');
  npArtist.textContent = track.artist;
  npArtist.classList.remove('placeholder-subtext');

  updatePlayButton(true);
}

function togglePlay() {
  if (currentTrackIndex === -1) {
    playTrack(0);
    return;
  }

  if (audio.paused) {
    audio.play().catch(e => console.log("Missing audio file."));
    updatePlayButton(true);
  } else {
    audio.pause();
    updatePlayButton(false);
  }
}

function updatePlayButton(isPlaying) {
  if (isPlaying) {
    playIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
  } else {
    playIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
  }
}

function setupEventListeners() {
  playBtn.addEventListener('click', togglePlay);

  playAllBtn.addEventListener('click', () => {
    if (currentTrackIndex === -1) playTrack(0);
    else togglePlay();
  });

  prevBtn.addEventListener('click', () => {
    if (currentTrackIndex > 0) {
      playTrack(currentTrackIndex - 1);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentTrackIndex < allTracks.length - 1) {
      playTrack(currentTrackIndex + 1);
    } else {
      playTrack(0);
    }
  });

  audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = `${progressPercent}%`;
    timeCurrent.textContent = formatTimeSeconds(audio.currentTime);
    timeTotal.textContent = formatTimeSeconds(audio.duration);
  });

  audio.addEventListener('ended', () => {
    if (currentTrackIndex < allTracks.length - 1) {
      playTrack(currentTrackIndex + 1);
    } else {
      updatePlayButton(false);
      progressFill.style.width = `0%`;
      timeCurrent.textContent = "0:00";
    }
  });

  progressBar.addEventListener('click', (e) => {
    if (!audio.duration) return;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pos * audio.duration;
  });

  volumeBar.addEventListener('click', (e) => {
    const rect = volumeBar.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.volume = pos;
    volumeFill.style.width = `${pos * 100}%`;
  });
}

function setGreeting() {
  const hour = new Date().getHours();
  let greeting = "Good evening";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  document.getElementById('greeting').textContent = greeting;
}

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  return formatTimeSeconds(totalSeconds);
}

function formatTimeSeconds(totalSeconds) {
  if (!totalSeconds || isNaN(totalSeconds)) return "0:00";
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

initApp();
