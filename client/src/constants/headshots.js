import headshot from "../assets/images/headshots";

export const headshots = [
  {
    id: 1,
    src: headshot.dentistOne,
    srcSet: {
      1920: headshot.dentistOne1920,
      1280: headshot.dentistOne1280,
      768: headshot.dentistOne768,
    },
    alt: 'Dentist Picture 1',
  },
  {
    id: 2,
    src: headshot.dentistTwo,
    srcSet: {
      1920: headshot.dentistTwo1920,
      1280: headshot.dentistTwo1280,
      768: headshot.dentistTwo768,
    },
    alt: 'Dentist Picture 2',
  },
  {
    id: 3,
    src: headshot.ralphShirt,
    srcSet: {
      1920: headshot.ralphShirt1920,
      1280: headshot.ralphShirt1280,
      768: headshot.ralphShirt768,
    },
    alt: 'Ralph Shirt Picture',
  },
  {
    id: 4,
    src: headshot.uarmorBlack,
    srcSet: {
      1920: headshot.uarmorBlack1920,
      1280: headshot.uarmorBlack1280,
      768: headshot.uarmorBlack768,
    },
    alt: 'Uarmor Black Picture',
  },
];