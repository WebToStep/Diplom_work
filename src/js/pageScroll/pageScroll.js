const smoothScroll = document.querySelector('.smooth-scroll');

export const scrollHide = visibility => smoothScroll.style.display = visibility;
export const pageScroll = () => window.scrollTo({ top: 0, behavior: 'smooth' });
