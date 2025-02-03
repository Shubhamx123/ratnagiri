import React from 'react';

const features = [
  {
    title: 'Ancient Artistry',
    description: 'Discover the intricate geoglyphs carved by our ancestors',
    image: 'https://i.imghippo.com/files/kua8357SnE.JPG'
  },
  {
    title: 'Cultural Heritage',
    description: 'Explore the rich cultural significance of Konkan region',
    image: 'https://i.imghippo.com/files/NSOV3212VY.JPG'
  },
  {
    title: 'Natural Wonder',
    description: 'Experience the stunning landscapes of the Western Ghats',
    image: 'https://i.imghippo.com/files/gy3991MOw.jpg'
  },
  {
    title: 'Conservation',
    description: 'Join our efforts to preserve these ancient treasures',
    image: 'https://i.imghippo.com/files/yJH9769sk.jpg'
  },
  {
    title: 'Research',
    description: 'Learn about ongoing archaeological studies',
    image: 'https://i.imghippo.com/files/gr1743T.jpg'
  },
  {
    title: 'Community',
    description: 'Connect with fellow heritage enthusiasts',
    image: 'https://i.imghippo.com/files/airq3258TDM.jpg'
  }
];

const FeaturedGrid = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="section-container">
        <h2 className="text-4xl font-merriweather font-bold text-center mb-12">
          Explore Our Heritage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-merriweather font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/90">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid