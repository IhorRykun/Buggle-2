const variablesStyles = '@import "./src/scss/common/_vars.scss"';
const breakpointsStyles = '@import "./src/scss/common/_breakpoints.scss"';
const mixinsStyles = '@import "./src/scss/common/_mixins.scss"';
const resetStyles = '@import "./src/scss/common/_reset.scss"';
const scrollbarStyles = '@import "./src/scss/common/_scrollbar.scss"';
const containerStyles = '@import "./src/scss/common/_container.scss"';
const titleStyles = '@import "./src/scss/common/_title.scss"';
const scrollToTopButtonStyles =
  '@import "./src/scss/common/_scrollToTopButton.scss"';

const styles = [
  variablesStyles,
  breakpointsStyles,
  mixinsStyles,
  resetStyles,
  scrollbarStyles,
  containerStyles,
  titleStyles,
  scrollToTopButtonStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
