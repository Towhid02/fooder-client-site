/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        galada : "'Galada', cursive",
        grand : "'Grand Hotel', cursive",
        itim : "'Itim', cursive",
        moli : "'Mooli', sans-serif",
        script : "'Style Script', cursive",
        deco : "'Stylish', serif"

      },
    },
    backgroundImage : {
      'headerBg': "url(../src/assets/header_img.png)",
      'about1': "url(../public/assets/about1.jpg)",
      'about2': "url(../../public/assets/about2.jpg)",
      'about3': "url(../public/assets/about3.jpg)",
      'bannerBg': "url(../public/assets/food02.jpg)",
      'aboutBg': "url(../public/assets/slide_2.jpg)",
      'bnr1': "url(../public/assets/food_24.png)",
      'bnr2': "url(../public/assets/food_20.png)",
      'bnr3': "url(../public/assets/food_14.png)",
      'bnr4': "url(../public/assets/food_17.png)",
      'bnr5': "url(../public/assets/food_4.png)",
      'bnr6': "url(../public/assets/food_7.png)",
      'gallery': "url(../public/assets/food_24.png)",
      
    }
  },
  plugins: [
    require('daisyui'),
  ],
}