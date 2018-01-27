/**
 * Cuts an audio file.
 * @param   {String} input     The input file path.
 * @param   {String} output    The output file path.
 * @param   {Int}    start     Start of clip in seconds.
 * @param   {Int}    duration  Duration of clip in seconds.
 * @promise {String} output    Returns the output again.
 */

const ffmpeg = require('fluent-ffmpeg');

function cutAudio(input, output, start, duration) {
  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(input)
      .seekInput(start)
      .duration(duration)
      .output(output)
      .on('end', () => {
        resolve(output);
      })
      .on('error', err => {
        reject(err);
      })
      .run();
  });
}

module.exports = cutAudio;
