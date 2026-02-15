import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import { 
  ShoppingCart, 
  Heart, 
  Car, 
  Laptop, 
  Package, 
  UtensilsCrossed,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface Card {
  images: { src: string; [key: string]: any }[];
  challenge: string;
  solution: string;
  results: string[];
}

interface UseCase {
  industry: string;
  iconName: string;
  cards: Card[];
}

interface Props {
  useCases: UseCase[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingCart,
  Heart,
  Car,
  Laptop,
  Package,
  UtensilsCrossed,
};

export default function UseCaseTabs({ useCases }: Props) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentGalleryImages, setCurrentGalleryImages] = useState<any[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (images: any[]) => {
    setCurrentGalleryImages(images);
    setCurrentImageIndex(0);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentGalleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentGalleryImages.length - 1 : prev - 1
    );
  };
  // Get unique industries
  const industries = Array.from(new Set(useCases.map((uc) => uc.industry)));

  return (
    <Tabs.Root defaultValue={industries[0]} className="w-full">
      <Tabs.List className="flex flex-wrap gap-2 border-b-2 border-neutral-700 mb-8 pb-2">
        {industries.map((industry) => {
          const useCase = useCases.find((uc) => uc.industry === industry);
          const IconComponent = useCase ? iconMap[useCase.iconName] : null;
          
          return (
            <Tabs.Trigger
              key={industry}
              value={industry}
              className="group px-6 py-3 text-sm text-body-light border-b-2 border-transparent hover:text-gold hover:border-gold transition-all duration-200 data-[state=active]:text-gold data-[state=active]:border-gold flex items-center gap-2"
            >
              {IconComponent && (
                <IconComponent className="w-4 h-4 group-data-[state=active]:text-gold" />
              )}
              {industry}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      {industries.map((industry) => {
        const useCase = useCases.find((uc) => uc.industry === industry);
        if (!useCase) return null;

        const IconComponent = iconMap[useCase.iconName];

        return (
          <Tabs.Content 
            key={industry} 
            value={industry} 
            className="space-y-6 animate-fadeIn"
          >
            {useCase.cards.map((card, cardIdx) => (
              <div key={cardIdx} className="bg-neutral-800 rounded-2xl border border-neutral-700 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Section */}
                  <div className="lg:col-span-6 relative h-64 lg:h-auto overflow-hidden">
                    <div className="grid grid-cols-2 gap-0 w-full h-full">
                      {card.images.map((img, imgIdx) => (
                        <div 
                          key={imgIdx} 
                          className="relative overflow-hidden cursor-pointer"
                          onClick={() => openGallery(card.images)}
                        >
                          <img
                            src={img.src}
                            alt={`${useCase.industry} image ${imgIdx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent pointer-events-none"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 rounded-xl bg-neutral-800/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        {IconComponent && (
                          <IconComponent className="w-8 h-8 text-gold" />
                        )}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {useCase.industry}
                      </h2>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-6 p-8 lg:p-10">
                    <div className="space-y-6">
                      {/* Challenge */}
                      <div className="bg-neutral-900 border-l-4 border-red-500 rounded-r-lg p-5">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                          <div>
                            <h3 className="text-lg font-bold text-red-400 mb-2">
                              Challenge
                            </h3>
                            <p className="text-neutral-300 leading-relaxed">
                              {card.challenge}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Solution */}
                      <div className="bg-neutral-900 border-l-4 border-blue-500 rounded-r-lg p-5">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                          <div>
                            <h3 className="text-lg font-bold text-gold mb-2">
                              Solution
                            </h3>
                            <p className="text-neutral-300 leading-relaxed">
                              {card.solution}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          Results
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {card.results.map((result, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 bg-neutral-900 rounded-lg p-4 border border-neutral-700"
                            >
                              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                              <span className="text-neutral-300 font-medium text-sm leading-relaxed">
                                {result}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Tabs.Content>
        );
      })}

      {/* Image Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between p-6 border-b border-neutral-700 sticky top-0 bg-neutral-900">
              <h2 className="text-2xl font-bold text-white">Image Gallery</h2>
              <button
                onClick={closeGallery}
                className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-neutral-400" />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <img
                  src={currentGalleryImages[currentImageIndex]?.src}
                  alt="Gallery image"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={prevImage}
                  className="p-3 hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-neutral-400" />
                </button>

                <div className="text-center">
                  <p className="text-neutral-400 font-medium">
                    {currentImageIndex + 1} / {currentGalleryImages.length}
                  </p>
                </div>

                <button
                  onClick={nextImage}
                  className="p-3 hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-neutral-400" />
                </button>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-3">
                {currentGalleryImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`w-full h-20 object-cover rounded-lg cursor-pointer transition-all ${
                      idx === currentImageIndex
                        ? 'ring-2 ring-blue-400 scale-105'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => setCurrentImageIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Tabs.Root>
  );
}
