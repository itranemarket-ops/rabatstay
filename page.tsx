'use client';

import { useState } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [videoError, setVideoError] = useState(false);

  // Search state
  const [destination, setDestination] = useState('');
  const [category, setCategory] = useState('all');

  const monuments = [
    {
      id: 'oudayas',
      title: 'Kasbah of the Udayas',
      titleAr: 'قصبة الأوداية',
      tag: 'UNESCO Heritage',
      image:
        'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
      description:
        'A picturesque 12th-century fortress featuring striking blue-and-white walled streets, Andalusian gardens, and ocean views.',
    },
    {
      id: 'hassan',
      title: 'Hassan Tower & Mausoleum',
      titleAr: 'صومعة حسان وضريح محمد الخامس',
      tag: 'Iconic Landmark',
      image:
        'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80',
      description:
        'An iconic incomplete minaret of a 12th-century mosque standing beside the grand marble Mausoleum of Mohammed V.',
    },
    {
      id: 'chellah',
      title: 'Chellah Necropolis',
      titleAr: 'موقع شالة الأثري',
      tag: 'Ancient Ruins',
      image:
        'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80',
      description:
        'An ancient Roman city and medieval Muslim necropolis surrounded by lush gardens, historic ruins, and nesting storks.',
    },
    {
      id: 'bab-el-had',
      title: 'Bab El Had',
      titleAr: 'باب الأحد',
      tag: 'Historic Gate',
      image:
        'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80',
      description:
        'One of the most famous historical gates of the Rabat Almohad wall, serving as a vibrant gateway to the old Medina.',
    },
  ];

  const galleryPhotos = [
    {
      url: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=600&q=80',
      title: 'Hassan Tower',
    },
    {
      url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80',
      title: 'Oudayas Streets',
    },
    {
      url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80',
      title: 'Rabat Coast',
    },
    {
      url: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80',
      title: 'Chellah Gardens',
    },
  ];

  return (
    <div
      style={{
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: '#0f172a',
        minHeight: '100vh',
        color: '#f8fafc',
        overflowX: 'hidden',
      }}
    >
      {/* Dynamic Keyframe Animations & Responsive CSS Overrides */}
      <style>{`
        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-animate {
          animation: heroFadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 32px !important;
          }
          .hero-subtitle {
            font-size: 16px !important;
          }
          .search-bar-container {
            flex-direction: column !important;
            padding: 16px !important;
            border-radius: 20px !important;
          }
          .search-input-group {
            width: 100% !important;
          }
          .search-button {
            width: 100% !important;
          }
        }
      `}</style>

      {/* Navbar Header */}
      <header
        style={{
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '16px 24px',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: '26px',
              fontWeight: '800',
              cursor: 'pointer',
              letterSpacing: '-0.5px',
              color: '#ffffff',
            }}
            onClick={() => setCurrentPage('home')}
          >
            Rabat<span style={{ color: '#f59e0b' }}>Stay</span>
          </div>
          <nav
            style={{
              display: 'flex',
              gap: '20px',
              fontSize: '14px',
              fontWeight: '600',
            }}
          >
            {['home', 'about', 'contact', 'privacy'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  color: currentPage === page ? '#f59e0b' : '#94a3b8',
                  transition: 'color 0.2s',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                {page === 'home'
                  ? 'Home'
                  : page === 'about'
                  ? 'About Us'
                  : page === 'contact'
                  ? 'Contact'
                  : 'Privacy Policy'}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        {currentPage === 'home' && (
          <div>
            {/* ======================================================== */}
            {/* CINEMATIC FULL-SCREEN VIDEO HERO SECTION                */}
            {/* ======================================================== */}
            <section
              style={{
                position: 'relative',
                width: '100%',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                marginBottom: '56px',
                backgroundImage: videoError
                  ? 'url("/images/rabat-hero.jpg")'
                  : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#0f172a',
              }}
            >
              {/* Background Video Implementation */}
              {!videoError && (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={() => setVideoError(true)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                >
                  <source src="/videos/rabat-hero.mp4" type="video/mp4" />
                </video>
              )}

              {/* Dark Black Overlay (approx 50% opacity) */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(15, 23, 42, 0.50)',
                  zIndex: 1,
                }}
              />

              {/* Bottom Subtle Gradient for Seamless Transition */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(to top, #0f172a 0%, rgba(15, 23, 42, 0.2) 50%, rgba(15, 23, 42, 0.4) 100%)',
                  zIndex: 2,
                }}
              />

              {/* Hero Centered Content */}
              <div
                className="hero-animate"
                style={{
                  position: 'relative',
                  zIndex: 3,
                  maxWidth: '900px',
                  width: '100%',
                  padding: '40px 20px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Tag Badge */}
                <span
                  style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    color: '#f59e0b',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                    padding: '6px 20px',
                    borderRadius: '30px',
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    backdropFilter: 'blur(8px)',
                    display: 'inline-block',
                  }}
                >
                  عاصمة الأنوار • Capital of Culture
                </span>

                {/* Headline */}
                <h1
                  className="hero-title"
                  style={{
                    fontSize: '52px',
                    fontWeight: '900',
                    color: '#ffffff',
                    lineHeight: '1.15',
                    letterSpacing: '-1px',
                    margin: '0 0 16px 0',
                    textShadow: '0 4px 20px rgba(0,0,0,0.6)',
                  }}
                >
                  Discover Rabat Capital
                </h1>

                {/* Description */}
                <p
                  className="hero-subtitle"
                  style={{
                    fontSize: '20px',
                    color: '#e2e8f0',
                    maxWidth: '700px',
                    lineHeight: '1.6',
                    margin: '0 0 36px 0',
                    fontWeight: '400',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                  }}
                >
                  Explore centuries of rich imperial history, UNESCO heritage
                  sites, modern culture, and pristine Atlantic coastline.
                </p>

                {/* Premium Search Bar */}
                <div
                  className="search-bar-container"
                  style={{
                    width: '100%',
                    maxWidth: '780px',
                    backgroundColor: 'rgba(15, 23, 42, 0.75)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    borderRadius: '50px',
                    padding: '8px 12px 8px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {/* Destination Input */}
                  <div
                    className="search-input-group"
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <label
                      style={{
                        fontSize: '11px',
                        color: '#f59e0b',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hassan Tower, Oudayas..."
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: '#ffffff',
                        fontSize: '14px',
                        width: '100%',
                        marginTop: '2px',
                      }}
                    />
                  </div>

                  <div
                    style={{
                      width: '1px',
                      height: '28px',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    }}
                  />

                  {/* Category Selector */}
                  <div
                    className="search-input-group"
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <label
                      style={{
                        fontSize: '11px',
                        color: '#f59e0b',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: '#ffffff',
                        fontSize: '14px',
                        width: '100%',
                        marginTop: '2px',
                        cursor: 'pointer',
                      }}
                    >
                      <option
                        value="all"
                        style={{ backgroundColor: '#0f172a', color: '#ffffff' }}
                      >
                        All Experiences
                      </option>
                      <option
                        value="monuments"
                        style={{ backgroundColor: '#0f172a', color: '#ffffff' }}
                      >
                        Monuments & Forts
                      </option>
                      <option
                        value="museums"
                        style={{ backgroundColor: '#0f172a', color: '#ffffff' }}
                      >
                        Museums & Culture
                      </option>
                      <option
                        value="beaches"
                        style={{ backgroundColor: '#0f172a', color: '#ffffff' }}
                      >
                        Coast & Stays
                      </option>
                    </select>
                  </div>

                  {/* Search CTA Button */}
                  <button
                    className="search-button"
                    style={{
                      backgroundColor: '#f59e0b',
                      color: '#0f172a',
                      border: 'none',
                      borderRadius: '40px',
                      padding: '14px 28px',
                      fontSize: '15px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 14px rgba(245, 158, 11, 0.4)',
                    }}
                  >
                    Explore Rabat
                  </button>
                </div>
              </div>
            </section>

            {/* Container for existing body sections */}
            <div
              style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px',
              }}
            >
              {/* Historical Monuments Grid */}
              <div style={{ marginBottom: '56px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '24px',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '28px',
                      fontWeight: '800',
                      color: '#ffffff',
                    }}
                  >
                    Historical Monuments
                  </h2>
                  <span
                    style={{
                      color: '#f59e0b',
                      fontWeight: '600',
                      fontSize: '16px',
                    }}
                  >
                    المآثر التاريخية
                  </span>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '24px',
                  }}
                >
                  {monuments.map((m) => (
                    <div
                      key={m.id}
                      style={{
                        backgroundColor: '#1e293b',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '20px',
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{ position: 'relative', height: '200px' }}>
                        <img
                          src={m.image}
                          alt={m.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <span
                          style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            backgroundColor: 'rgba(15,23,42,0.75)',
                            color: '#f59e0b',
                            padding: '4px 10px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '700',
                          }}
                        >
                          {m.tag}
                        </span>
                      </div>
                      <div style={{ padding: '20px' }}>
                        <h3
                          style={{
                            fontSize: '18px',
                            fontWeight: '700',
                            margin: '0 0 4px 0',
                            color: '#ffffff',
                          }}
                        >
                          {m.title}
                        </h3>
                        <p
                          style={{
                            fontSize: '14px',
                            color: '#f59e0b',
                            fontWeight: '600',
                            margin: '0 0 12px 0',
                          }}
                        >
                          {m.titleAr}
                        </p>
                        <p
                          style={{
                            fontSize: '14px',
                            color: '#94a3b8',
                            lineHeight: '1.5',
                          }}
                        >
                          {m.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rabat Gallery Section */}
              <div style={{ marginBottom: '40px' }}>
                <h2
                  style={{
                    fontSize: '28px',
                    fontWeight: '800',
                    color: '#ffffff',
                    marginBottom: '24px',
                  }}
                >
                  Rabat City Gallery
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '20px',
                  }}
                >
                  {galleryPhotos.map((img, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: 'relative',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        height: '180px',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            'linear-gradient(to top, rgba(15,23,42,0.8), transparent)',
                          display: 'flex',
                          alignItems: 'flex-end',
                          padding: '12px',
                        }}
                      >
                        <span
                          style={{
                            color: '#ffffff',
                            fontSize: '13px',
                            fontWeight: '600',
                          }}
                        >
                          {img.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AdSense Pages */}
        {currentPage === 'about' && (
          <div
            style={{
              maxWidth: '1200px',
              margin: '40px auto',
              padding: '0 20px',
            }}
          >
            <div
              style={{
                backgroundColor: '#1e293b',
                padding: '36px',
                borderRadius: '20px',
              }}
            >
              <h1 style={{ color: '#ffffff', marginTop: 0 }}>
                About RabatStay
              </h1>
              <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                RabatStay.com is a dedicated digital platform designed to
                showcase the capital city of Morocco, Rabat. Discover iconic
                sites, cultural landmarks, and local insights.
              </p>
            </div>
          </div>
        )}

        {currentPage === 'contact' && (
          <div
            style={{
              maxWidth: '1200px',
              margin: '40px auto',
              padding: '0 20px',
            }}
          >
            <div
              style={{
                backgroundColor: '#1e293b',
                padding: '36px',
                borderRadius: '20px',
              }}
            >
              <h1 style={{ color: '#ffffff', marginTop: 0 }}>Contact Us</h1>
              <p style={{ color: '#94a3b8' }}>
                Get in touch with us for inquiries or partnerships:
              </p>
              <p
                style={{
                  color: '#f59e0b',
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}
              >
                contact@rabatstay.com
              </p>
            </div>
          </div>
        )}

        {currentPage === 'privacy' && (
          <div
            style={{
              maxWidth: '1200px',
              margin: '40px auto',
              padding: '0 20px',
            }}
          >
            <div
              style={{
                backgroundColor: '#1e293b',
                padding: '36px',
                borderRadius: '20px',
              }}
            >
              <h1 style={{ color: '#ffffff', marginTop: 0 }}>Privacy Policy</h1>
              <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                At RabatStay.com, accessible from https://rabatstay.com, one of
                our main priorities is the privacy of our visitors. We use
                Google AdSense to serve ads and analyze traffic.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer with Interactive Map */}
      <footer
        style={{
          backgroundColor: '#020617',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          color: '#94a3b8',
          padding: '48px 24px 24px 24px',
          marginTop: '60px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '24px',
                fontWeight: '800',
                color: '#ffffff',
                marginBottom: '12px',
              }}
            >
              Rabat<span style={{ color: '#f59e0b' }}>Stay</span>
            </div>
            <p
              style={{ fontSize: '14px', lineHeight: '1.6', color: '#64748b' }}
            >
              Your official travel guide to exploring Rabat, Morocco. Discover
              history, architecture, and top city sights.
            </p>
            <p
              style={{
                fontSize: '14px',
                color: '#f59e0b',
                fontWeight: '600',
                marginTop: '12px',
              }}
            >
              📍 Rabat, Kingdom of Morocco
            </p>
          </div>

          <div>
            <h4
              style={{
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '16px',
              }}
            >
              Quick Navigation
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '14px',
              }}
            >
              <li>
                <button
                  onClick={() => setCurrentPage('home')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('about')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('contact')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('privacy')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '16px',
              }}
            >
              Rabat Map
            </h4>
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                height: '180px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <iframe
                title="Rabat Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105885.0483864704!2d-6.912630500000001!3d33.9715904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b871f50c5c1%3A0x7ac946ed7408076b!2sRabat%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '20px',
            textAlign: 'center',
            fontSize: '13px',
            color: '#64748b',
          }}
        >
          <p>&copy; 2026 RabatStay.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
