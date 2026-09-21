import portrait from '../assets/images/portraits';

export const portraits = [
  {
    id: 2,
    src: portrait.potraitTwo,
    srcSet: {
      1920: portrait.potraitTwo1920,
      1280: portrait.potraitTwo1280,
      768: portrait.potraitTwo768,
    },
    alt: 'Portrait Session',
  },
  {
    id: 5,
    src: portrait.weddingPortrait,
    srcSet: {
      1920: portrait.weddingPortrait1920,
      1280: portrait.weddingPortrait1280,
      768: portrait.weddingPortrait768,
    },
    alt: 'Wedding Portrait',
  },
];