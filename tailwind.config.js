/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ["./SRC/**/*.{html,js}"],
  theme: {
     screens: {
        'xs': '300px',
        // => @media (min-width: 640px) { ... }

        'md': '767px',
        // => @media (min-width: 768px) { ... }

        'lg': '992px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1200px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
     },
     extend: {}, // This should be outside the `screens` block
  },
  plugins: [],
};

=======
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {},
   },
   plugins: [],
 }
>>>>>>> 8c2b6cde5d8d3b930ae953a06c37f72f093fc07f
