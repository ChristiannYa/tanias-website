import vdsOne from './vds-1.jpeg';
import vdsSmallOne from './vds-1-small/jpeg';
import vdsOne768 from './vds-1-768.jpeg';
import vdsOne1280 from './vds-1-1280.jpeg';
import vdsOne1920 from './vds-1-1920.jpeg';

import vdsTwo from './vds-2.jpeg';
import vdsSmallTwo from './vds-2-small/jpeg';
import vdsTwo768 from './vds-2-768.jpeg';
import vdsTwo1280 from './vds-2-1280.jpeg';
import vdsTwo1920 from './vds-2-1920.jpeg';

export const vds1 = {
  deafult: vdsOne,
  small: vdsSmallOne,
  sizes: {
    768: { default: vdsOne768 },
    1280: { default: vdsOne1280 },
    1920: { default: vdsOne1920 }
  }
}

export const vds2 = {
  deafult: vdsTwo,
  small: vdsSmallTwo,
  sizes: {
    768: { default: vdsTwo768 },
    1280: { default: vdsTwo1280 },
    1920: { default: vdsTwo1920 }
  }
}
