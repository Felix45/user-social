/**
 * This file contains the data for the gallery on the landing page.
 */
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width) => `https://assets.react-photo-album.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F${id}&w=${width}&q=75`;

const unsplashPhotos = [
  { id: 'image01.018d1d35.jpg', width: 1080, height: 800 },
  { id: 'image02.cf33eff7.jpg', width: 1080, height: 1620 },
  { id: 'image03.cdc32b45.jpg', width: 1080, height: 720 },
  { id: 'image04.9a1f6335.jpg', width: 1080, height: 721 },
  { id: 'image05.d7ef12b4.jpg', width: 1080, height: 1620 },
  { id: 'image06.4ab952e3.jpg', width: 1080, height: 608 },
  { id: 'image07.ac608196.jpg', width: 1080, height: 607 },
  { id: 'image08.95e095b5.jpg', width: 1080, height: 720 },
  { id: 'image09.fa6c4764.jpg', width: 1080, height: 1549 },
  { id: 'image10.411ea655.jpg', width: 1080, height: 720 },
  { id: 'image11.f3ea483a.jpg', width: 1080, height: 694 },
  { id: 'image12.5a9347ea.jpg', width: 1080, height: 1620 },
  { id: 'image13.ce46dd98.jpg', width: 1080, height: 720 },
  { id: 'image14.68b2812c.jpg', width: 1080, height: 1440 },
  { id: 'image15.4461facf.jpg', width: 1080, height: 1620 },
  { id: 'image16.5ad17d8b.jpg', width: 1080, height: 810 },
  { id: 'image17.a242e897.jpg', width: 1080, height: 610 },
  { id: 'image18.0479bde8.jpg', width: 1080, height: 160 },
  { id: 'image19.ab7b61f4.jpg', width: 1080, height: 810 },
  { id: 'image20.f62571df.jpg', width: 1080, height: 720 },
  { id: 'image21.14c9bee0.jpg', width: 1080, height: 1440 },
];

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
