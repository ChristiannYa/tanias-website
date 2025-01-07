import { useEffect, useState } from "react";

import Slideshow from "../sections/portraits/Slideshow";
import BookButton from "../components/BookButton";

const Portraits = () => {
  const [contentHeight, setContentHeight] = useState('100vh');
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  // Header height
  useEffect(() => {
    const header = document.querySelector('header');
    let lastHeight = 0;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const currentHeight = entry.contentRect.height;
        if (Math.abs(currentHeight - lastHeight) > 1) {
          setHeaderHeight(currentHeight);
          lastHeight = currentHeight;
        }
      }
    });

    if (header) {
      resizeObserver.observe(header);
    }

    return () => resizeObserver.disconnect();
  }, []);

    // Footer height
    useEffect(() => {
      const footer = document.querySelector('footer');
      let lastHeight = 0;
  
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const currentHeight = entry.contentRect.height;
          if (Math.abs(currentHeight - lastHeight) > 1) {
            setFooterHeight(currentHeight);
            lastHeight = currentHeight;
          }
        }
      });
  
      if (footer) {
        resizeObserver.observe(footer);
      }
  
      return () => resizeObserver.disconnect();
    }, []);

  useEffect(() => {
    // Screen height - headerHeight - (footerHeight - sum of vertical padding of the footer)
    setContentHeight(`calc(100vh - ${headerHeight}px - ${footerHeight}px - 48px)`);
  }, [headerHeight, footerHeight]);

  return (
    <div className="colflex-center gap-8" style={{ height: contentHeight }}>
      <Slideshow/>
      <BookButton/>
    </div>
  );
};

export default Portraits