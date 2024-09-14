
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const animation = { duration: 8000, easing: (t) => t }
const Slider = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        slides: { origin: "center", perView:3.5, spacing: 0 },
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
      })
    return (
        <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide ">
        <img className="w-full h-60 rounded-xl" src="/public/assets/food_24.png" alt="" />
      </div>
      <div className="keen-slider__slide">
      <img className="w-full h-60 rounded-xl" src="/public/assets/food_13.png" alt="" />
      </div>
      <div className="keen-slider__slide ">
      <img className="w-full h-60 rounded-xl" src="/public/assets/food_6.png" alt="" />
      </div>
      <div className="keen-slider__slide  ">
      <img className="w-full h-60 rounded-xl" src="/public/assets/food_18.png" alt="" />
      </div>
      <div className="keen-slider__slide  ">
      <img className="w-full h-60 rounded-xl" src="/public/assets/food_19.png" alt="" />
      </div>
      <div className="keen-slider__slide ">
      <img className="w-full h-60 rounded-xl" src="/public/assets/food_20.png" alt="" />
      </div>
    </div>
    );
};

export default Slider;