const Footer = () => {
  const socialLinks = [
    { icon: "f", label: "Facebook", url: "https://facebook.com/kongu-times" },
    { icon: "𝕏", label: "Twitter", url: "https://twitter.com/kongu-times" },
    { icon: "📷", label: "Instagram", url: "https://instagram.com/kongu-times" },
    { icon: "in", label: "LinkedIn", url: "https://linkedin.com/company/kongu-times" },
    { icon: "▶", label: "YouTube", url: "https://youtube.com/@kongutimes" },
  ];

  return (
    <footer className="bg-card border-t border-border py-8 mt-12">
      <div className="container mx-auto px-4">
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://facebook.com/kongu-times"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-2xl"
            title="Facebook"
          >
            📘
          </a>
          <a
            href="https://twitter.com/kongu-times"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-2xl"
            title="Twitter/X"
          >
            𝕏
          </a>
          <a
            href="https://instagram.com/kongu-times"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-2xl"
            title="Instagram"
          >
            📷
          </a>
          <a
            href="https://linkedin.com/company/kongu-times"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-2xl"
            title="LinkedIn"
          >
            💼
          </a>
          <a
            href="https://youtube.com/@kongutimes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-2xl"
            title="YouTube"
          >
            ▶️
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-center text-muted-foreground text-sm">
          © 2026 The Kongu Times. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
