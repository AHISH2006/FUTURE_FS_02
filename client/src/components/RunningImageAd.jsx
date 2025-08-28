import React from "react";

const ads = [
  {
    image: "https://i.pinimg.com/736x/83/52/8d/83528d6f70ea9678030f2e63eb4b8083.jpg",
    offer: "Gaming PC's Starting at  ₹ 31561",
  },
  {
    image: "https://i.pinimg.com/1200x/f5/a9/9b/f5a99b3bb3878b5dfaa1f747c4a23be8.jpg",
    offer: "Up to 40% Off on Graphics Cards from  ₹ 21040",
  },
  {
    image: "https://i.pinimg.com/1200x/51/fa/93/51fa93a09334d803c8c4fade51b151f8.jpg",
    offer: "Special Deals on High-Speed RAM for just  ₹ 5260",
  },
  {
    image: "https://i.pinimg.com/1200x/cb/c5/22/cbc522023acc771d945bedc34a86574c.jpg",
    offer: "Limited Stock: NVMe SSDs from  ₹ 7013",
  },
  {
    image: "https://i.pinimg.com/1200x/d4/b8/33/d4b833b082c5e98859c1c11672e31c45.jpg",
    offer: "Motherboard Combos with extra discounts from  ₹ 10520",
  },
];

const RunningImageAd = () => {
  return (
    <div className="relative w-full overflow-hidden py-4 mb-10 bg-gradient-to-r from-purple-900/40 via-black to-purple-900/40 border-y border-purple-600 shadow-lg">
      <div className="ad-track">
        {[...ads, ...ads].map((ad, index) => (
          <div key={index} className="ad-slide">
            <img src={ad.image} alt="Gaming Offer" className="ad-image" />
            <p className="ad-offer">{ad.offer}</p>
          </div>
        ))}
      </div>

      <style >{`
        .ad-track {
          display: flex;
          width: max-content;
          animation: scroll 35s linear infinite;
        }
        .ad-slide {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0 2rem;
          position: relative;
          white-space: nowrap;
        }
        .ad-slide::after {
          content: "•";
          color: #a855f7;
          margin-left: 2rem;
          font-size: 1.5rem;
          opacity: 0.7;
        }
        .ad-image {
          height: 50px;
          width: auto;
          object-fit: contain;
          border-radius: 6px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease;
        }
        .ad-image:hover {
          transform: scale(1.1);
        }
        .ad-offer {
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          text-shadow: 0 0 6px rgba(168, 85, 247, 0.8);
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .ad-slide {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
          .ad-slide::after {
            display: none;
          }
          .ad-image {
            height: 40px;
          }
          .ad-offer {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RunningImageAd;
