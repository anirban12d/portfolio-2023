/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',
  './node_modules/flowbite/**/*.js'

],
  theme: {
    fontSize: {
      xs: ['2.4rem', { lineHeight: '2.2rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      '9': ['0.9rem', {lineHeight: '150%'}],
      '11': ['1.1rem', {lineHeight: '150%'}],
      '12': ['1.2rem', {lineHeight: '150%'}],
      '13': ['1.3rem', {lineHeight: '150%'}],
      '15': ['1.5rem', {lineHeight: '150%'}],
      '16': ['1.6rem', {lineHeight: '150%'}],
      '19': ['1.9rem', {lineHeight: '150%'}],
      '21': ['2.1rem', {lineHeight: '150%'}],
      '23': ['2.3rem', {lineHeight: '150%'}],
      '24': ['2.4rem', {lineHeight: '90%'}],
      '27': ['2.7rem', {lineHeight: '150%'}],
      '28': ['2.8rem', {lineHeight: '150%'}],
      '33': ['3.3rem', {lineHeight: '100%'}],
      '36': ['3.6rem', {lineHeight: '100%'}],
      '40': ['4rem', {lineHeight: '100%'}],
      '47': ['4.7rem', {lineHeight: '90%'}],
      '48': ['4.8rem', {lineHeight: '90%'}],
      '57': ['5.7rem', {lineHeight: '90%'}],
      '61': ['6.1rem', {lineHeight: '90%'}],
      '69': ['6.9rem', {lineHeight: '90%'}],
      '80': ['8rem', {lineHeight: '90%'}],
      '105': ['10.5rem', {lineHeight: '90%'}],
      '138': ['13.8rem', {lineHeight: '90%'}]
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      90: '90%',
      100: '100%',
      150: '150%',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
      low: '-0.06em',
    },
    screens: {
      sx: '375px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    
    extend: {
      fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      'primary': "#ffffff",
      'secondary': '#000000',
      'bgColor': '#242729',
      'textColor': '#3f3f3f',
      'backColor': '#E9ECEF',
      'backColor2': '#dee2e6',
      'blue': '#1771D1',
      "grey": '#F4F4F4',
      'modal': '#3f3f3f',
      ...defaultTheme.colors
    }
    },
    spacing: {
      "60%": '60%',
      '78%': '78%',
      '90%': '90%',

      '0': '0px',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '24': '24px',
      '26': '26px',
      '28': '28px',
      '30': '30px',
      '32': '32px',
      '40': '40px',
      '44': '44px',
      '45': '45px',
      '46': '46px',
      '47': '47px',
      '48': '48px',
      '50': '50px',
      '56': '56px',
      '60': '60px',
      '64': '64px',
      '72': '72px',
      '80': '80px',
      '88': '88px',
      '93': '93px',
      '96': '96px',
      '100': '100px',
      '104': '104px',
      '112': '112px',
      '120': '120px',
      '128': '128px',
      '136': '136px',
      '144': '144px',
      '152': '152px',
      '160': '160px',
      '168': '168px',
      '176': '176px',
      '184': '184px',
      '192': '192px',
      '200': '200px',
      '208': '208px',
      '216': '216px',
      '224': '224px',
      '232': '232px',
      '240': '240px',
      '248': '248px',
      '256': '256px',
      '264': '264px',
      '272': '272px',
      '280': '280px',
      '288': '288px',
      '296': '296px',
      '304': '304px',
      '312': '312px',
      '320': '320px',
      '328': '328px',
      '336': '336px',
      '344': '344px',
      '352': '352px',
      '360': '360px',
      '368': '368px',
      '376': '376px',
      '380': '380px',
      '384': '384px',
      '376': '376px',
      '384': '384px',
      '392': '392px',
      '400': '400px',
      '512': '512px',
      '624': '624px',
      '942': '942px',
      '996': '996px',
      '1080': '1080px',
      '1280': '1280px',
      '4000': '4000px',
      "100vw": '100vw'
    },
    borderRadius: {
      '4xl': '32px',
      ...defaultTheme.borderRadius
    },
    maxWidth: {
      '80%': '80%',
      '90%': '90%',
      prose: '75ch',
      '215': '215px',
      '200': '200px',
      '255': '255px',
      '340': '340px',
      '380': '380px',
      '384': '384px',
      '396': '396px',
      '416': '416px',
      '420': '420px',
      '442': '442px',
      '448': '448px',
      '496': '496px',
      '542': '542px',
      '633': '633px',
      '640': '640px',
      '736': '736px',
      '512': '512px',
      '848': '848px',
      '996': '996px',
      '1080': '1080px',
      ...defaultTheme.maxWidth,
    },
    minWidth: {
      '20%': '20%',
      '96': '96px',
      '70%': '70px',
      '80%': '80px',
      '90%': '90px',
      '320': '320px',
      '420': '420px',
      '448': '448px',
      '384': '384px',
      ...defaultTheme.minWidth,
    },
    minHeight: {
      '60%': '60%',
      '96%': '96%',
      '96': '96px',
      '65%': '65%',
      '80%': '80%',
      '288': '288px',
      '256': '256px',
      '320': '320px',
      '360': '360px',
      '160': '160px',
      '210': '210px',
      '420': '420px',
      '512': '512px',
      ...defaultTheme.minHeight,
    },
    maxHeight: {
      "60%": '60%',
      '79%': '79%',
      '80%': '80%',
      '90%': '90%',
      '128': '128px',
      '210': '210px',
      '256': '256px',
      '288': '288px',
      '312': '312px',
      '400': '400px',
      '420': '420px',
      '640': '640px',
      '666': '666px',
      none: 'none',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      ...defaultTheme.maxHeight,
    }
  },

  corePlugins: {
    aspectRatio: false,
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
