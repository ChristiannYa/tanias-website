import homePage from '../assets/images/home-page';

export const landing = [
  {
    id: 1,
    src: homePage.blueDress,
    srcset: {
      1920: homePage.blueDress1920,
      1280: homePage.blueDress1280,
      768: homePage.blueDress768,
    },
    alt: 'Landing image',
    class: 'blue-dress-xv',
  },
  {
    id: 2,
    src: homePage.marioLopez,
    srcset: {
      1920: homePage.marioLopez1920,
      1280: homePage.marioLopez1280,
      768: homePage.marioLopez768,
    },
    alt: 'Landing image',
    class: 'mario-lopez',
  },
  {
    id: 3,
    src: homePage.outdoors,
    srcset: {
      1920: homePage.outdoors1920,
      1280: homePage.outdoors1280,
      768: homePage.outdoors768,
    },
    alt: 'Landing image',
    class: 'outdoors',
  },
];