/**
 * Downloads a file.
 * @param   {String} output  The target/path to save the file to.
 * @param   {String} uri     The uri of the file.
 * @promise {String} path    The loaded user instance.
 */

const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const url = require('url');

function downloadFile(output, uri) {
  return new Promise((resolve, reject) => {
    // Parse URI.
    const parsedUrl = url.parse(uri);

    // Check if we will use https or http for the request.
    const network = parsedUrl.protocol === 'https:' ? https : http;

    // Create write stream. This will be the file that we will create
    // with the download.
    const file = fs.createWriteStream(output);

    // Download the file and save.
    const request = network.get(uri, response => {
      // Get filetype here with response.headers['content-type']

      response.pipe(file);
    });

    // Callback.
    file.on('finish', () => resolve(file.path));
  });
}

module.exports = downloadFile;
