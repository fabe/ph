const ffmpeg = require('fluent-ffmpeg');

function renderVideo(audio, image, output, duration) {
  return new Promise((resolve, reject) => {
    ffmpeg()
      .addInput(image)
      .loop(duration)
      .addInput(audio)
      .fps(25)
      .audioCodec('aac')
      .videoCodec('libx264')
      .format('mp4')
      .on('end', () => {
        resolve(output);
      })
      .on('error', err => {
        reject(err);
      })
      .output(output, { end: true })
      .run();
  });
}

module.exports = renderVideo;
