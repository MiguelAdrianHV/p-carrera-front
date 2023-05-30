export const breakpoints = {
  xs: "375px",
  small: "576px",
  medium: "768px",
  large: "992px",
  extraLarge: "1200px",
  extraExtraLarge: "1400px",
};
export const breakpointsInt = {
  small: 576,
  medium: 768,
  large: 992,
  extraLarge: 1200,
  extraExtraLarge: 1400,
};

export const scrollTo = (ref) => {
  if (ref != null) {
    ref?.current.scrollIntoView({
      behavior: "smooth",
    });
  }
};
