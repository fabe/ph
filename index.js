const path = require('path');
const createShareable = require('./src/createShareable');
const TEMP_DIR = path.resolve(__dirname, 'temp');

// TODO: Receive meta info from a data source. Only input should be one URL.

const mp3 =
  'https://media.simplecast.com/episodes/audio/103247/Bobby_Ghoshal_-_Its_about_the_customer_not_just_the_user_1.mp3';
const title =
  'A Talk at AIGA: Designers, make this ONE mindset change in 2018 to drive massive business value &mdash; High Resolution';
const artwork =
  'https://d1eedt7bo0oujw.cloudfront.net/art?s=a9ce669bcc35ec1081d59557fcdab9110deb986ce5729f647180da49f970e45c&amp;w=840&amp;u=https%3A%2F%2Fmedia.simplecast.com%2Fpodcast%2Fimage%2F2652%2F1486696867-artwork.jpg';

// [starttime, duration]
const frames = [300, 10];

createShareable(TEMP_DIR, mp3, artwork, title, frames);

// TODO Clean up files.
