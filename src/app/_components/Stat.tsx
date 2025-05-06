'use client';
import { motion } from 'framer-motion';
import  CountUp  from 'react-countup'; 

const stats = [
  { value: 24, suffix: '/7', label: 'Customer Support' },
  { value: 120, suffix: '+', label: 'Brand Collaborations' },
  { value: 50, suffix: 'k+', label: 'Satisfied Clients' },
  { value: 500, suffix: '+', label: 'Curated Pieces'},
  { value: 12, suffix: 'k+', label: 'Social Followers' },
];

export default function FashionStats() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24 ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-2 text-gray-900 dark:text-white">
                <CountUp
                  end={stat.value}
                  duration={2}
                  className="inline-block"
                />
                <span className="text-blue-500 font-bold">{stat.suffix}</span>
              </div>
              <p className="text-lg text-gray-600 font-semibold dark:text-gray-300 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}