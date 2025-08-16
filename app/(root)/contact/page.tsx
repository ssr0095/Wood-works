import Link from "next/link";

const About = () => {
  return (
    <>
      <h1>About</h1>
      {/* // Primary actions (Sign up, Purchase, Submit) */}
      <button className="btn btn-primary">Get Started</button>

      {/* // Secondary actions (Learn more, Cancel) */}
      <button className="btn btn-secondary">Learn More</button>

      {/* // Subtle actions (Close, Skip) */}
      <button className="btn btn-ghost">Skip</button>

      {/* // Borders without fill (Alternative choice) */}
      <button className="btn btn-outline">Contact Us</button>

      {/* // Product cards, testimonials, feature boxes */}
      <div className="card hover-lift">
        <div className="card-header">
          <h3 className="card-title">Feature Title</h3>
        </div>
        <div className="card-content">
          <p>Feature description...</p>
        </div>
      </div>

      {/* // Header navigation, sidebar menus */}
      <nav>
        <Link href="/" className="nav-link active">
          Home
        </Link>
        <Link href="/about" className="nav-link">
          About
        </Link>
        <Link href="/contact" className="nav-link">
          Contact
        </Link>
      </nav>

      {/* // Contact forms, search bars, user input */}
      <input type="email" className="input" placeholder="Enter your email" />

      {/* // Status indicators, tags, categories */}
      <span className="badge badge-primary">New</span>
      <span className="badge badge-secondary">Popular</span>

      {/* // Main content wrapper */}
      <div className="container">
        <section className="section">
          <h1 className="text-gradient">Welcome to Our Site</h1>
        </section>
      </div>

      {/* // Glass morphism for modals, overlays */}
      <div className="glass">Modal content</div>

      {/* // Gradient text for headlines */}
      <h1 className="text-gradient">Amazing Product</h1>

      {/* // Hover animations for interactive elements   */}
      <div className="card hover-lift hover-glow">...</div>
    </>
  );
};

export default About;
