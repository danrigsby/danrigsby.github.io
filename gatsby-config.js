module.exports = {
  siteMetadata: {
    title: 'Dan Rigsby',
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'akbq4b0728yp',
        accessToken: '021ecc36e4ceff6ac7ddc0a87c6b0933bac32916cefe76a946bf888fcc6b0974',
      },
    }
  ]
};
