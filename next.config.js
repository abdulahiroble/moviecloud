const withImages = require("next-images");

module.exports = withImages({
  env: {
    NEXT_PUBLIC_API_SECRET: process.env.NEXT_PUBLIC_API_SECRET,
  },

  images: {
    domains: ["image.tmdb.org"],
  },

  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
});

// const nextConfig = {
//   images: {
//     domains: ["image.tmdb.org"],
//   },

//   env: {
//     NEXT_PUBLIC_API_SECRET: process.env.NEXT_PUBLIC_API_SECRET,
//   },

//   exportPathMap: function () {
//     return {
//       "/": { page: "/" },
//     };
//   },
// };

// module.exports = withPlugins([[withImages]], nextConfig);
