import landingImage from '../assets/cover-phone.png';
import mobileAppImage from '../assets/download.webp';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-orange-600">
          Pick up something delicious!
        </h1>
        <span className="text-1xl lg:text-xl">
          Get your cravings satisfied in just a click!
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img
          src={landingImage}
          alt="phone-jpg"
          className="rounded-lg shadow-md"
        />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Grab your food faster than ever!
          </span>
          <span>
            Download FoodMitra for faster ordering and personalized meal
            recommendations
          </span>
          <img src={mobileAppImage} className="h-28 max-h-44 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
