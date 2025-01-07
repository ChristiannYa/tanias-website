
import {
  package1,
  package2,
  package3,
  package4,
  package5,
  package6,
} from '../assets/images/packages';

export const packages = [
  {
    id: 'package1',
    title: 'mini sessions',
    small_img: package1.small,
    sizes: {
      768: { default: package1.sizes[768].default },
      1280: { default: package1.sizes[1280].default },
      1920: { default: package1.sizes[1920].default },
    },
    desc: ['10 digitals', '30 min'],
    price: 150,
  },
  {
    id: 'package2',
    title: 'XV & sweet 16th',
    small_img: package2.small, 
    sizes: {
      768: { default: package2.sizes[768].default },
      1280: { default: package2.sizes[1280].default },
      1920: { default: package2.sizes[1920].default },
    },
    desc: ['5 hr photo coverage'],
    price: 1100,
  },
  {
    id: 'package3',
    title: 'outdoor session',
    small_img: package3.small, 
    sizes: {
      768: { default: package3.sizes[768].default },
      1280: { default: package3.sizes[1280].default },
      1920: { default: package3.sizes[1920].default },
    },
    desc: ['20 digitals', '1 hour'],
    price: 275,
  },
  {
    id: 'package4',
    title: 'corporate event',
    small_img: package4.small, 
    sizes: {
      768: { default: package4.sizes[768].default },
      1280: { default: package4.sizes[1280].default },
      1920: { default: package4.sizes[1920].default },
    },
    desc: ['3 hr photo coverage'],
    price: 600,
  },
  {
    id: 'package5',
    title: 'real estate',
    small_img: package5.small, 
    sizes: {
      768: { default: package5.sizes[768].default },
      1280: { default: package5.sizes[1280].default },
      1920: { default: package5.sizes[1920].default },
    },
    desc: ['30 digitals', '90 min'],
    price: 700,
  },
  {
    id: 'package6',
    title: 'portrait studio session',
    small_img: package6.small, 
    sizes: {
      768: { default: package6.sizes[768].default },
      1280: { default: package6.sizes[1280].default },
      1920: { default: package6.sizes[1920].default },
    },
    desc: ['15 digitals', '1 hr'],
    price: 300,
  },
];
