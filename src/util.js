const makeFileName = (s, e, p) =>
  `${p}/${s.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${e}`;

module.exports = { makeFileName };
