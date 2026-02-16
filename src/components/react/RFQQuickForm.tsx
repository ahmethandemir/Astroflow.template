import React, { useMemo, useState } from 'react';
import * as Label from '@radix-ui/react-label';
import * as Checkbox from '@radix-ui/react-checkbox';
import {
  Check,
  User,
  Building2,
  Briefcase,
  Warehouse,
  Factory,
  Truck,
  Network,
  Wrench,
  Calendar,
  Package,
} from 'lucide-react';

export default function RFQForm() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [showDetails, setShowDetails] = useState(false);

  const serviceOptions = useMemo(
    () => [
      { id: 'fuar-standi', label: 'Fuar Standı', icon: Warehouse },
      { id: 'reklam-tanitim', label: 'Reklam & Tanıtım', icon: Truck },
      { id: 'ekipman-kiralama', label: 'Ekipman / Donanım Kiralama', icon: Package },
      { id: 'kongre-konferans', label: 'Kongre / Konferans', icon: Factory },
      { id: 'magaza-showroom', label: 'Mağaza / Showroom', icon: Network },
      { id: 'diger', label: 'Diğer', icon: Wrench },
    ],
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedService) {
      alert('Lütfen Hizmet Türü seçiniz.');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    // serviceType'ı tek alan olarak garantiye al
    formData.set('serviceType', selectedService);

    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);

    alert('Thank you for your request! We will contact you within 24 hours.');
    form.reset();
    setSelectedService('');
    setShowDetails(false);
  };

  return (
    <form className="space-y-6" id="rfq-form" onSubmit={handleSubmit} name="rfq-form">
      {/* Contact Information */}
      <div>
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center mr-3">
            <User className="w-5 h-5 text-white" />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold heading-subsection">30 Saniyede Ön Teklif Talebi</h2>
            <p className="text-sm text-white  mt-1">Temel bilgileri bırakın, projenizi birlikte netleştirelim.</p>
            <p className="text-sm text-green-600 font-medium mt-1">✔ Genellikle 1 iş günü içinde dönüş sağlıyoruz.</p>
          </div>

          <div className="hidden md:block text-xs text-gray-400">~30 sn</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label.Root htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
              Ad <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="Örn: Ali"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <Label.Root htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
              Soyad <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Örn: Demir"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <Label.Root htmlFor="email" className="block text-sm font-medium text-white mb-2">
              E-posta <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Örn: ad@firma.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <Label.Root htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              Telefon <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="+90 5XX XXX XX XX"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
            <p className="text-xs text-gray-500 mt-2">Teklif sürecini hızlandırmak için sizi telefonla arıyoruz.</p>
          </div>
        </div>
      </div>

      {/* Company */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center mr-3">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Firma Bilgisi</h2>
            <p className="text-sm text-white mt-1">Bireyselseniz firma alanına “Bireysel” yazabilirsiniz.</p>
          </div>
        </div>

        <Label.Root htmlFor="company" className="block text-sm font-medium text-white mb-2">
          Firma Adı <span className="text-red-500">*</span>
        </Label.Root>
        <input
          type="text"
          id="company"
          name="company"
          required
          placeholder="Örn: Tanas Fuarcılık"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
        />
      </div>

      {/* Service */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-600 to-emerald-600 flex items-center justify-center mr-3">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Hangi Hizmetle İlgileniyorsunuz?</h2>
            <p className="text-sm text-white mt-1">Tek seçim yapmanız yeterli. Detayları görüşmede netleştiriyoruz.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceOptions.map((service) => {
            const IconComponent = service.icon;
            const checked = selectedService === service.id;

            return (
              <div
                key={service.id}
                className={[
                  'flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition group',
                  checked ? 'border-gold bg-gold/10' : 'border-neutral-300 hover:border-gold hover:bg-gold/10',
                ].join(' ')}
                onClick={() => setSelectedService(service.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(ev) => {
                  if (ev.key === 'Enter' || ev.key === ' ') {
                    ev.preventDefault();
                    setSelectedService(service.id);
                  }
                }}
              >
                <Checkbox.Root
                  id={service.id}
                  checked={checked}
                  onCheckedChange={(v) => {
                    if (v === true) setSelectedService(service.id);
                    else if (checked) setSelectedService('');
                  }}
                  className="w-5 h-5 flex items-center justify-center border-2 border-neutral-400 rounded data-[state=checked]:bg-gold data-[state=checked]:border-gold transition-colors shrink-0"
                >
                  <Checkbox.Indicator>
                    <Check className="w-4 h-4 text-white" />
                  </Checkbox.Indicator>
                </Checkbox.Root>

                <div className="w-8 h-8 rounded-lg bg-neutral-100 group-hover:bg-gold/20 flex items-center justify-center shrink-0 transition-colors">
                  <IconComponent className="w-4 h-4 text-neutral-600 group-hover:text-gold transition-colors" />
                </div>

                <Label.Root htmlFor={service.id} className="text-sm font-medium text-white cursor-pointer flex-1">
                  {service.label}
                </Label.Root>
              </div>
            );
          })}
        </div>

        <input type="hidden" name="serviceType" value={selectedService} />
      </div>

      {/* Optional Details */}
      <div className="pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={() => setShowDetails((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-gray-300 hover:border-gold transition text-left font-medium"
          aria-expanded={showDetails}
        >
          <span>{showDetails ? 'Detay Alanını Kapat' : 'İsterseniz Proje Detayı Ekleyebilirsiniz (Opsiyonel)'}</span>
          <span className="text-gray-600">{showDetails ? '−' : '+'}</span>
        </button>

        <p className="text-xs text-white mt-2">Zorunlu değildir. Daha net bir teklif için ekleyebilirsiniz.</p>

        {showDetails && (
          <div className="mt-6 space-y-6">
            <div>
              <Label.Root htmlFor="industry" className="block text-sm font-medium text-white mb-2">
                Sektör
              </Label.Root>
              <select
                id="industry"
                name="industry"
                className="bg-neutral-900 w-full text-white px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              >
                <option value="">Alanınızı seçiniz</option>
                <option value="teknoloji">Teknoloji</option>
                <option value="oyun-dijital-eglence">Oyun & Dijital Eğlence</option>
                <option value="perakende">Perakende</option>
                <option value="otomotiv">Otomotiv</option>
                <option value="insaat-yapi">İnşaat & Yapı</option>
                <option value="saglik">Sağlık</option>
                <option value="egitim">Eğitim</option>
                <option value="gida">Gıda</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* ✅ Event Date as free text input (not dropdown) */}
            <div>
              <Label.Root htmlFor="eventDate" className="flex items-center text-sm font-medium text-white mb-2">
                <Calendar className="w-4 h-4 mr-2 text-white" />
                Etkinlik / Proje Tarihi (aralık)
              </Label.Root>
              <input
                type="text"
                id="eventDate"
                name="eventDate"
                placeholder="Örn: 12–15 Mayıs 2026 / Mayıs 2026 / Tarih net değil"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              <p className="text-xs text-white mt-2">
                Tarih aralığını yazabilirsiniz. Net değilse “Tarih net değil” demeniz yeterli.
              </p>
            </div>

            <div>
              <Label.Root htmlFor="volume" className="flex items-center text-sm font-medium text-white mb-2">
                <Package className="w-4 h-4 mr-2 text-white" />
                Alan Ölçüsü (m²)
              </Label.Root>

              <div className="relative">
                <input
                  type="text"
                  id="volume"
                  name="volume"
                  placeholder="Örn: 24 m²"
                  className="w-full px-4 py-2 pl-10 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
              </div>
            </div>

            <div>
              <Label.Root htmlFor="details" className="block text-sm font-medium text-white mb-2">
                Proje Detayları
              </Label.Root>

              <textarea
                id="details"
                name="details"
                rows={6}
                placeholder={`Kısaca ihtiyacınızı yazabilirsiniz.
(Alan ölçüsü, özel beklentiler, referanslar, örnek çalışmalar vb.)`}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Submit */}
      <div className="pt-6">
        <button
          type="submit"
          className="btn-primary w-full bg-gold text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-gold/80 transition-all duration-200 hover:shadow-xl active:scale-95 flex items-center justify-center space-x-2"
        >
          <span>Ön Teklifimi Oluştur →</span>
        </button>

        <p className="text-xs text-gray-400 text-center mt-3">Bilgileriniz üçüncü kişilerle paylaşılmaz.</p>

        <p className="text-sm text-gray-500 text-center mt-2">
          By submitting this form, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </form>
  );
}
