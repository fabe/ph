const webshot = require('node-webshot');

function renderImage(html, output) {
  return new Promise((resolve, reject) => {
    webshot(
      html,
      output,
      {
        siteType: 'html',
        screenSize: {
          width: 1200,
          height: 670,
        },
        shotSize: {
          width: 1200,
          height: 'all',
        },
      },
      err => {
        if (err) {
          reject(err);
        } else {
          resolve(output);
        }
      }
    );
  });
}

module.exports = renderImage;
