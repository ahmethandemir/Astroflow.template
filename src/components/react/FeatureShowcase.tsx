import { motion } from 'motion/react';
import { Warehouse, Truck, Package, BarChart3, Shield, Headphones } from 'lucide-react';

import fuarImg from '@assets/61.webp';
import ekipmanImg from '@assets/kinghand4.webp';
import reklamImg from '@assets/11.webp';
import baskiImg from '@assets/baski.webp';
import tasarimImg from '@assets/CFMoto1.webp';
import conferenceImg from '@assets/CFMoto1.webp';

const features = [
  {
    icon: Warehouse,
    title: 'Fuar Stand Çözümleri',
    description: 'Özel üretim ve sistem stand çözümleriyle markanızı fuar alanında öne çıkarıyoruz.',
    image: fuarImg,
  },
  {
    icon: BarChart3,
    title: 'Baskı & Görsel Uygulamalar',
    description: 'Dijital baskıdan alan giydirmeye kadar tüm görsel üretim süreçlerini yönetiyoruz.',
    image: baskiImg,
  },
  {
    icon: Truck,
    title: 'Fuar Ekipman & Donanım Kiralama',
    description: 'TV, mobilya, aydınlatma ve teknik ekipman kiralama hizmetlerini kurulum dahil sağlıyoruz.',
    image: ekipmanImg,
  },
  {
    icon: Package,
    title: 'Reklam & Tanıtım Üretimleri',
    description: 'Billboard, dijital baskı ve marka uygulamaları.',
    image: reklamImg,
  },
  {
    icon: Truck,
    title: 'Kongre & Konferans Hizmetleri',
    description: 'Sahne, teknik altyapı ve alan çözümleri.',
    image: conferenceImg,
  },
  {
    icon: Shield,
    title: 'Tasarım & Projelendirme & Üretim & Kurulum',
    description: '3D tasarım, teknik çizim ve konsept geliştirme. Planlı imalat süreci ve zamanında saha uygulaması.',
    image: tasarimImg,
  },
];

export default function FeatureShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={feature.image.src}
                alt={feature.title}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
              
              {/* Icon overlay */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="absolute top-4 right-4 w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center shadow-lg"
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-200 opacity-90">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

