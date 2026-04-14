import logo from "@/assets/logo.png";

const Header = () => (
  <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-600 shadow-lg">
    <div className="container mx-auto flex items-center gap-4 px-4 py-3">
      <img src={logo} alt="The Kongu Times Logo" className="h-14 w-auto rounded-lg" />
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">The Kongu Times</h1>
        <p className="text-sm text-primary-foreground/80">கொங்கு நாட்டின் நம்பகமான செய்தி</p>
      </div>
    </div>
  </header>
);

export default Header;
