import React from 'react';
import ImageCarousel from './ImageCarousel';

const images = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWV8XtMaJgxFEfeNTN9J8hRdgz2U2EmD24MypUMznB3lXCpehjtw',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWV8XtMaJgxFEfeNTN9J8hRdgz2U2EmD24MypUMznB3lXCpehjtw',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWV8XtMaJgxFEfeNTN9J8hRdgz2U2EmD24MypUMznB3lXCpehjtw',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWV8XtMaJgxFEfeNTN9J8hRdgz2U2EmD24MypUMznB3lXCpehjtw',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWV8XtMaJgxFEfeNTN9J8hRdgz2U2EmD24MypUMznB3lXCpehjtw',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWV8XtMaJgxFEfeNTN9J8hRdgz2U2EmD24MypUMznB3lXCpehjtw',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWV8XtMaJgxFEfeNTN9J8hRdgz2U2EmD24MypUMznB3lXCpehjtw',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWV8XtMaJgxFEfeNTN9J8hRdgz2U2EmD24MypUMznB3lXCpehjtw',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWV8XtMaJgxFEfeNTN9J8hRdgz2U2EmD24MypUMznB3lXCpehjtw',
  },
];

export default {
  Default: <ImageCarousel />,
  withImages: <ImageCarousel images={images} />,
};
