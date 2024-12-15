/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-1': "url('src/assets/ImageAndIcons/aboutusbg.png')",
        'background-2': "url('src/assets/ImageAndIcons/dharmalogobg.png')",
        'background-3': "url('src/assets/ImageAndIcons/homeIMG.png')",
        'background-4': "url('src/assets/ImageAndIcons/allprojectbg.png')",
        'background-5': "url('src/assets/services/services.png')",
      }
    },
  },
  plugins: [],
}

