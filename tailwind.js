module.exports = {
    theme: {
      fontFamily: {
        sans: [
          'system-ui',
          'BlinkMacSystemFont',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        display: ['klavika-web-condensed', 'sans-serif'],
      },

      extend: {
        colors: {
          'text-color': '#201e1f',

          gray: {
            '100': '#F3F5F7',
            '200': '#E9ECF0',
            '300': '#D4DAE1',
            '400': '#BFC8D3',
            '500': '#AAB6C4',
            '600': '#95A4B6',
            '700': '#8092A7',
            '800': '#6D7A88',
            '900': '#596069',
          },

          brand: {
            yellow: '#e7b226',
            'yellow-alt': '#f3c74f',
            black: '#201e1f',
            blue: '#17385f',
            'blue-alt': '#2a65ac',
          },
        },

        spacing: {
          '28': '7rem',
          '72': '18rem',
          '9/20': '45%',
        },
      },

      gradients: {
        directions: {
          t: 'to top',
          r: 'to right',
          b: 'to bottom',
          l: 'to left',
        },

        styles: {
          gray: ['colors.gray.400', 'colors.gray.200'],
          'brand-yellow': ['colors.brand.yellow', 'colors.brand.yellow-alt'],
          'brand-blue': ['colors.brand.blue', 'colors.brand.blue-alt'],
        },
      },
    },

    variants: {
      //
    },

    plugins: [
    //   gradients,
    //   pinOpposite,
    ],
};
