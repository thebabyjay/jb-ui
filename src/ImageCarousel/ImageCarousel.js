import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import LeftArrow from '@material-ui/icons/ArrowLeft';
import RightArrow from '@material-ui/icons/ArrowRight';
import ImageContainer from './ImageContainer';
import ImageModal from './ImageModal';
import styles from './ImageCarousel.styles';

const useStyles = makeStyles(styles);

const ImageCarousel = ({ images }) => {
  const classes = useStyles();
  const container = useRef(null);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(140);

  const checkSize = () => {
    try {
      setWidth(container.current.parentElement.offsetWidth);
    } catch (e) {
      console.log('ImageCarousel e', e);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    checkSize();
  }, []);

  const [currentImage, setCurrentImage] = useState(null);

  return (
    <React.Fragment>
      <div
        ref={container}
        key="image-carousel-outer"
        className={classes.imageCarouselOuter}
        style={{
          width,
          height,
        }}
      >
        <div
          key="image-carousel-inner"
          className={classes.imageCarouselInner}
          style={{
            width,
            height: height - 15,
          }}
        >
          {images &&
            images.length &&
            images.map((image, index) => (
              <div className={classes.imageCarouselTile} key={`tile-${index}`} onClick={() => setCurrentImage(image)}>
                <img className={classnames(classes.imageCarouselImage)} key={`tile-img-${index}`} src={image.src} />
              </div>
            ))}
        </div>
      </div>
      <ImageModal image={currentImage} open={Boolean(currentImage)} onClose={() => setCurrentImage(null)} />
    </React.Fragment>
  );
};
ImageCarousel.defaultProps = {};
ImageCarousel.propTypes = {
  images: PropTypes.array,
};

export default ImageCarousel;
