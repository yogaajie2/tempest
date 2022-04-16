// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},

    backgroundColor: {
      'dp-0': '#121212',
      'dp-1': '#1E1E1E',
      'dp-2': '#232323',
      'dp-3': '#252525',
      'dp-4': '#272727',
      'dp-6': '#2C2C2C',
      'dp-8': '#2F2F2F',
      'dp-12': '#333333',
      'dp-16': '#353535',
      'dp-24': '#383838',
      'primary-dark': '#1A1E1C',
    },

    backgroundOpacity: {
      '0': '0',
      '5': '0.05',
      '7': '0.07',
      '8': '0.08',
      '9': '0.09',
      '11': '0.11',
      '12': '0.12',
      '14': '0.14',
      '15': '0.15',
      '16': '0.16'
    },

    colors: {
      'primary': '#B1FBD7',
      'black': '#000000',
      'white': '#FFFFFF'
    },

    fontFamily: {
      'heading': ['Raleway', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif']
    },

    zIndex: {
      '0': '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '6': '6',
      '8': '8',
      '12': '12',
      '16': '16',
      '24': '24'
    }
  },
  plugins: [],
}
