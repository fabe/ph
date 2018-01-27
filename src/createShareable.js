const downloadFile = require('./downloadFile');
const cutAudio = require('./cutAudio');
const createTemplate = require('./createTemplate');
const renderImage = require('./renderImage');
const renderVideo = require('./renderVideo');
const { makeFileName } = require('./util');

async function createShareable(output, mp3, artwork, title, frames) {
  // TODO Check if the episode was already downloaded.

  const start = frames[0];
  const duration = frames[1];

  console.log('Fetching the assets...');

  // We need 2 assets downloaded:
  const audioPath = await downloadFile(makeFileName(title, 'mp3', output), mp3);
  const imagePath = await downloadFile(
    makeFileName(title, 'jpg', output),
    artwork
  );

  console.log('Assets fetched.');
  console.log('Creating the thumbnail...');

  // Let's create the thumbnail.
  const html = createTemplate(imagePath, title);
  const thumbnail = await renderImage(
    html,
    makeFileName(title + '_thumb', 'jpg', output)
  );

  console.log('Thumbnail created.');
  console.log('Creating the audio clip...');

  // Next, we need to cut the audio to the wanted keyframes.
  const cutAudioPath = await cutAudio(
    audioPath,
    makeFileName(title + '_cut', 'mp3', output),
    start,
    duration
  );

  console.log('Audio clip created.');
  console.log('Rendering the video...');

  // Next up, we can create the final video.
  const video = await renderVideo(
    cutAudioPath,
    thumbnail,
    makeFileName(title, 'mp4', output),
    duration
  );

  console.log(`A highlight was successfully created!\n\nFind it at ${video}.`);
}

module.exports = createShareable;
