export default theme => ({
  imageCarouselOuter: {
    overflowX: 'scroll',
  },
  imageCarouselInner: {
    display: 'flex',
    overflowY: 'hidden',
  },
  imageCarouselTile: {
    position: 'relative',
    display: 'inline-block', // In case it's not rendered with a div.
    height: '100%',
  },
  imageCarouselImage: {
    width: 200,
    height: '100%',
    position: 'relative',
    margin: 10
  }
});
