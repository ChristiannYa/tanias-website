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
    src: headshot.nikeShirtOne,
    srcSet: {
      1920: headshot.nikeShirtOne1920,
      1280: headshot.nikeShirtOne1280,
      768: headshot.nikeShirtOne768,
    },
    alt: 'Nike Shirt Model Picture',
  }
]