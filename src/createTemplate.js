const fs = require('fs');
const decode = require('unescape');

const createTemplate = (image, title) => {
  const bitmap = fs.readFileSync(image);
  const b64 = new Buffer(bitmap).toString('base64');

  return `
  <style>
    table {
      width: 1200px;
      height: 670px;
      padding: 5%;
      background-image: linear-gradient(-180deg, #0e045c 0%, #4016aa 100%);
      color: #fff;
      font-size: 40px;
      font-family: BlinkMacSystemFont, -apple-system, Roboto, sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: bold;
    }

    body {
      margin: 0;
    }

    img {
      width: 80%;
      -webkit-transform: perspective(600px) rotateY(10deg) translateX(10%);
      transform: perspective(600px) rotateY(10deg) translateX(10%);
    }
  </style>

  <table>
    <tr>
      <td width="50%">
        <img src="data:image/png;base64,${b64}">
      </td>
      <td width="50%">${decode(title)}</td>
    </tr>
  </table>
`;
};

module.exports = createTemplate;
