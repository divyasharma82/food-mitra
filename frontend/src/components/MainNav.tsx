import { Button } from './ui/button';

const MainNav = () => {
  return (
    <Button
      variant="ghost"
      className="font-bold hover:text-orange-500 hover:bg-white"
    >
      Log In
    </Button>
  );
};

MainNav.propTypes = {};

export default MainNav;
