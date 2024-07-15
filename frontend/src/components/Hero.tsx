import heroImage from '../assets/hero21.webp';
const Hero = () => {
  return (
    <div>
      <img
        src={heroImage}
        className="w-full max-h-[580px] object-cover object-center rounded-xm shadow-lg"
      />
    </div>
  );
};

export default Hero;
