module.exports = {
  Image: (payload) => {
    return [
      1,
      'Image loading error',
      `The following candidate image failed to load: ${payload}.`,
    ];
  },
};
