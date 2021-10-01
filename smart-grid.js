const smartGrid = require('smart-grid');

// run command: node smart-grid.js
smartGrid('./src/styles/global/', {
  outputStyle: 'scss',
  filename: '_smart-grid',
  columns: 12, // number of grid columns
  offset: '1.875rem', // gutter width - 30px
  mobileFirst: false,
  mixinNames: {
      container: 'container'
  },
  container: {
    maxWidth: '1170px',
    fields: '0.9375rem' // side fields - 15px
  },
  breakPoints: {
    xs: {
        width: '20rem' // 320px
    },
    sm: {
        width: '36rem' // 576px
    },
    md: {
        width: '48rem' // 768px
    },
    lg: {
        width: '62rem' // 992px
    },
    xl: {
        width: '75rem' // 1200px
    }
  }
});