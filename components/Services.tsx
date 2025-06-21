const Services = () => {
  return (
    <section id="services" className="section bg-surface-container-low">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
            Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-on-surface-variant">
            We combine traditional techniques with modern innovation to deliver
            furniture that stands the test of time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Service 1 --> */}
          <div className="card animate-scale-in">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-[var(--color-secondary-container)]">
                {/* <svg className="w-8 h-8 text-[var(--text-secondary)]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg> */}
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Furniture</h3>
              <p className="leading-relaxed mb-6 text-[var(--text-muted)]">
                Bespoke furniture pieces designed and crafted to perfectly fit
                your space and style preferences.
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li>• Dining Tables & Chairs</li>
                <li>• Wardrobes & Storage</li>
                <li>• Beds & Nightstands</li>
                <li>• Office Furniture</li>
              </ul>
            </div>
          </div>
          <div className="card animate-scale-in">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-[var(--color-secondary-container)]">
                <svg
                  className="w-8 h-8 text-[var(--text-secondary)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                Custom Furniture
              </h3>
              <p className="leading-relaxed mb-6 text-[var(--text-muted)]">
                Bespoke furniture pieces designed and crafted to perfectly fit
                your space and style preferences.
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li>• Dining Tables & Chairs</li>
                <li>• Wardrobes & Storage</li>
                <li>• Beds & Nightstands</li>
                <li>• Office Furniture</li>
              </ul>
            </div>
          </div>
          <div className="card animate-scale-in">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-[var(--color-secondary-container)]">
                <svg
                  className="w-8 h-8 text-[var(--text-secondary)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">
                Custom Furniture
              </h3>
              <p className="leading-relaxed mb-6 text-[var(--text-muted)]">
                Bespoke furniture pieces designed and crafted to perfectly fit
                your space and style preferences.
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li>• Dining Tables & Chairs</li>
                <li>• Wardrobes & Storage</li>
                <li>• Beds & Nightstands</li>
                <li>• Office Furniture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
