const colors = {
  dark: '#161616',
  primary: '#CF7A68',
  white: '#FFFFFF',
  success: '#7AC142',
  error: '#A90000',
  darkTint: {
    darkTint20: '#3D3D3D',
    darkTint15: '#515151',
    darkTint10: '#696969',
    darkTint05: '#C4C4C4',
  },
  background: {
    aboutMeBackground: 'linear-gradient(180deg, #161616 0%, #3D3D3D 100%)',
    technologiesBackground: 'linear-gradient(180deg, #3D3D3D 0%, #696969 100%)',
    projectsBackground: 'linear-gradient(180deg, #696969 0%, #C4C4C4 100%)',
  },
  gradient: 'linear-gradient(297.98deg, #CF7A68 7.86%, #B9697A 47.98%, #956184 91.6%)',
};

export const typographySizes = {
  header1: '9.8rem',
  header2: '6.1rem',
  header3: '4.9rem',
  header4: '3.5rem',
  header5: '2.4rem',
  header6: '2rem',
  paragraphBig: '1.6rem',
  paragraphSmall: '1.4rem',
};
export const typographyWeights = {
  header1: '800',
  header2: '700',
  header3: '600',
  header4: '400',
  header5: '400',
  header6: '400',
  paragraphBig: '400',
  paragraphSmall: '400',
};
export const typographyHeights = {
  header1: '13.3rem',
  header2: '8.3rem',
  header3: '6.7rem',
  header4: '4.8rem',
  header5: '3.3rem',
  header6: '2.7rem',
  paragraphBig: '2.2rem',
  paragraphSmall: '1.9rem',
};
export const typographySpacing = {
  header1: '-0.15rem',
  header2: '-0.05rem',
  header3: '0',
  header4: '0.25rem',
  header5: '0',
  header6: '0.15rem',
  paragraphBig: '0.05rem',
  paragraphSmall: '0.025rem',
};

export const medias = {
  tablet: '(max-width:1200px)',
  mobile: '(max-width:690px)',
};

const theme = {
  colors,
  typography: {
    typographySizes,
    typographyWeights,
    typographyHeights,
    typographySpacing,
  },
  medias,
};

export default theme;
