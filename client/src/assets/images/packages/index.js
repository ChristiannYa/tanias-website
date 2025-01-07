// Package One
import packageOne768 from './package-1-768.jpg';
import packageOne1280 from './package-1-1280.jpg';
import packageOne1920 from './package-1-1920.jpg';
import packageOneSmall from './package-1-small.jpg';
import packageOne from './package-1.jpg';

// Package Two
import packageTwo768 from './package-2-768.jpg';
import packageTwo1280 from './package-2-1280.jpg';
import packageTwo1920 from './package-2-1920.jpg';
import packageTwoSmall from './package-2-small.jpg';
import packageTwo from './package-2.jpg';

// Package Three
import packageThree768 from './package-3-768.jpg';
import packageThree1280 from './package-3-1280.jpg';
import packageThree1920 from './package-3-1920.jpg';
import packageThreeSmall from './package-3-small.jpg';
import packageThree from './package-3.jpg';

// Package Four
import packageFour768 from './package-4-768.jpg';
import packageFour1280 from './package-4-1280.jpg';
import packageFour1920 from './package-4-1920.jpg';
import packageFourSmall from './package-4-small.jpg';
import packageFour from './package-4.jpg';

// Package Five
import packageFive768 from './package-5-768.jpg';
import packageFive1280 from './package-5-1280.jpg';
import packageFive1920 from './package-5-1920.jpg';
import packageFiveSmall from './package-5-small.jpg';
import packageFive from './package-5.jpg';

// Package Six
import packageSix768 from './package-6-768.jpg';
import packageSix1280 from './package-6-1280.jpg';
import packageSix1920 from './package-6-1920.jpg';
import packageSixSmall from './package-6-small.jpg';
import packageSix from './package-6.jpg';

export const package1 = {
  default: packageOne,
  small: packageOneSmall,
  sizes: {
    768: { default: packageOne768 },
    1280: { default: packageOne1280 },
    1920: { default: packageOne1920 }
  }
};

export const package2 = {
  default: packageTwo,
  small: packageTwoSmall,
  sizes: {
    768: { default: packageTwo768 },
    1280: { default: packageTwo1280 },
    1920: { default: packageTwo1920 }
  }
};

export const package3 = {
  default: packageThree,
  small: packageThreeSmall,
  sizes: {
    768: { default: packageThree768 },
    1280: { default: packageThree1280 },
    1920: { default: packageThree1920 }
  }
};

export const package4 = {
  default: packageFour,
  small: packageFourSmall,
  sizes: {
    768: { default: packageFour768 },
    1280: { default: packageFour1280 },
    1920: { default: packageFour1920 }
  }
};

export const package5 = {
  default: packageFive,
  small: packageFiveSmall,
  sizes: {
    768: { default: packageFive768 },
    1280: { default: packageFive1280 },
    1920: { default: packageFive1920 }
  }
};

export const package6 = {
  default: packageSix,
  small: packageSixSmall,
  sizes: {
    768: { default: packageSix768 },
    1280: { default: packageSix1280 },
    1920: { default: packageSix1920 }
  }
};
