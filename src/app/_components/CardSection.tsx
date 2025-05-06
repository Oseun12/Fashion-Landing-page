'use client';

const features = [
  {
    title: "Sustainable Design Philosophy",
    description: "Every collection merges avant-garde aesthetics with eco-conscious practices.",
    icon: "♻️",
    color: "bg-blue-500"
  },
  {
    title: "Bespoke Customization",
    description: "Tailor each piece to your client's measurements with our made-to-order platform.",
    icon: "✂️",
    color: "bg-blue-500"
  },
  {
    title: "Instant Visual Rendering",
    description: "See design modifications in real-time with our 3D garment simulation.",
    icon: "👁️",
    color: "bg-blue-500"
  },
  {
    title: "End-to-End Platform",
    description: "Integrated tools handle design, production, and client management.",
    icon: "🔄",
    color: "bg-blue-500"
  }
];

export default function DesignPhilosophy() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">
            Revolutionary <span className="font-serif italic text-blue-600">Fashion Technology</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform empowers designers with tools that bridge creativity and commerce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              {/* Card Content */}
              <div className="p-8 pb-8">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
              
              {/* Colored Base Bar */}
              {/* <div className="relative h-16 w-full overflow-hidden">
                <div 
                  className={`absolute inset-0 ${feature.color} opacity-80`}
                  style={{
                    maskImage: 'radial-gradient(ellipse 80% 50% at bottom, black 60%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at center, black 60%, transparent 100%)'
                  }}
                />
                <div 
                  className="absolute inset-0 backdrop-blur-md"
                  style={{
                    maskImage: 'radial-gradient(ellipse 80% 50% at center, black 60%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at center, black 60%, transparent 100%)'
                  }}
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}