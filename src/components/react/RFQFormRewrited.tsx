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
  Cpu,
  Calendar,
  Package,
} from 'lucide-react';

type CheckedState = boolean | 'indeterminate';

export default function RFQForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedScopes, setSelectedScopes] = useState<string[]>([]);

  const serviceOptions = useMemo(
    () => [
      { id: 'fuar-standi', label: 'Fuar Standı', icon: Warehouse },
      { id: 'kongre-konferans', label: 'Kongre / Konferans', icon: Factory },
      { id: 'reklam-tanitim', label: 'Reklam & Tanıtım', icon: Truck },
      { id: 'magaza-showroom', label: 'Mağaza / Showroom', icon: Network },
      { id: 'diger', label: 'Diğer', icon: Wrench },
    ],
    []
  );

  const scopeOptions = useMemo(
    () => [
      { id: 'kapsam-tasarim', label: 'Tasarım', icon: Cpu },
      { id: 'kapsam-uretim', label: 'Üretim', icon: Package },
      { id: 'kapsam-kurulum', label: 'Kurulum & Söküm', icon: Wrench },
      { id: 'kapsam-teknik', label: 'Teknik Altyapı', icon: Network },
      { id: 'kapsam-anahtar-teslim', label: 'Anahtar Teslim', icon: Briefcase },
    ],
    []
  );

  const toggleInList = (list: string[], id: string, checked: CheckedState) => {
    const isChecked = checked === true;
    if (isChecked) return Array.from(new Set([...list, id]));
    return list.filter((x) => x !== id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // multiple hidden inputs => getAll ile al
    const services = formData.getAll('services').map(String);
    const scopes = formData.getAll('serviceScope').map(String);

    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', { ...data, services, scopes });

    alert('Teşekkürler! Talebinizi aldık, en kısa sürede sizinle iletişime geçeceğiz.');
    form.reset();
    setSelectedServices([]);
    setSelectedScopes([]);
  };

  return (
    <form className="space-y-6" id="rfq-form" onSubmit={handleSubmit} name="rfq-form" background="white">
      {/* Contact Information */}
      <div>
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center mr-3 text-neutral-900">
            <User className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">İletişim Bilgileri</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label.Root htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              Ad <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <Label.Root htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Soyad <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <Label.Root htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-posta Adresi <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <Label.Root htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Telefon Numarası <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+90 5XX XXX XX XX"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center mr-3">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Firma Bilgileri</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label.Root htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Firma Adı <span className="text-red-500">*</span>
            </Label.Root>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <Label.Root htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
              Sektör <span className="text-red-500">*</span>
            </Label.Root>
            <select
              id="industry"
              name="industry"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
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
              <option value="diger">Diğer</option>
            </select>
          </div>
        </div>
      </div>

      {/* Service Requirements */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-600 to-emerald-600 flex items-center justify-center mr-3">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Proje ve Hizmet Detayları</h2>
        </div>

        <div className="space-y-6">
          {/* Hizmet Türü */}
          <div>
            <Label.Root className="block text-sm font-medium text-gray-700 mb-3">
              Hizmet Türü <span className="text-red-500">*</span>
            </Label.Root>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceOptions.map((service) => {
                const IconComponent = service.icon;
                const checked = selectedServices.includes(service.id);

                return (
                  <div
                    key={service.id}
                    className="flex items-center space-x-3 p-4 border-2 border-neutral-700 rounded-lg hover:border-gold hover:bg-gold/10 transition-all cursor-pointer group"
                    onClick={() =>
                      setSelectedServices((prev) =>
                        checked ? prev.filter((x) => x !== service.id) : [...prev, service.id]
                      )
                    }
                  >
                    <Checkbox.Root
                      id={service.id}
                      checked={checked}
                      onCheckedChange={(v) => setSelectedServices((prev) => toggleInList(prev, service.id, v))}
                      className="w-5 h-5 flex items-center justify-center border-2 border-neutral-600 rounded data-[state=checked]:bg-gold data-[state=checked]:border-gold transition-colors shrink-0"
                    >
                      <Checkbox.Indicator>
                        <Check className="w-4 h-4 text-white" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>

                    <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center shrink-0 transition-colors">
                      <IconComponent className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    </div>

                    <Label.Root
                      htmlFor={service.id}
                      className="text-sm font-medium text-gray-700 cursor-pointer flex-1 group-hover:text-gray-900 transition-colors"
                    >
                      {service.label}
                    </Label.Root>

                    {/* FormData için hidden inputs */}
                    {checked && <input type="hidden" name="services" value={service.id} />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hizmet Kapsamı (2. grup) */}
          <div>
            <Label.Root className="block text-sm font-medium text-gray-700 mb-3">
              Hizmet Kapsamı
            </Label.Root>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scopeOptions.map((scope) => {
                const IconComponent = scope.icon;
                const checked = selectedScopes.includes(scope.id);

                return (
                  <div
                    key={scope.id}
                    className="flex items-center space-x-3 p-4 border-2 border-neutral-700 rounded-lg hover:border-gold hover:bg-gold/10 transition-all cursor-pointer group"
                    onClick={() =>
                      setSelectedScopes((prev) =>
                        checked ? prev.filter((x) => x !== scope.id) : [...prev, scope.id]
                      )
                    }
                  >
                    <Checkbox.Root
                      id={scope.id}
                      checked={checked}
                      onCheckedChange={(v) => setSelectedScopes((prev) => toggleInList(prev, scope.id, v))}
                      className="w-5 h-5 flex items-center justify-center border-2 border-neutral-600 rounded data-[state=checked]:bg-gold data-[state=checked]:border-gold transition-colors shrink-0"
                    >
                      <Checkbox.Indicator>
                        <Check className="w-4 h-4 text-neutral-900" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>

                    <div className="w-8 h-8 rounded-lg bg-neutral-700 group-hover:bg-gold/20 flex items-center justify-center shrink-0 transition-colors">
                      <IconComponent className="w-4 h-4 text-neutral-400 group-hover:text-gold transition-colors" />
                    </div>

                    <Label.Root
                      htmlFor={scope.id}
                      className="text-sm font-medium text-gray-700 cursor-pointer flex-1 group-hover:text-gray-900 transition-colors"
                    >
                      {scope.label}
                    </Label.Root>

                    {/* FormData için hidden inputs */}
                    {checked && <input type="hidden" name="serviceScope" value={scope.id} />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline + Alan Ölçüsü */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label.Root
                htmlFor="eventDate"
                className="flex items-center text-sm font-medium text-gray-700 mb-2"
              >
                <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                Etkinlik / Proje Tarihi <span className="text-red-500 ml-1">*</span>
              </Label.Root>

              <input
                type="text"
                id="eventDate"
                name="eventDate"
                required
                placeholder="Örn: 12–15 Mayıs 2026 / Mayıs 2026 / Tarih henüz net değil"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />

              <Calendar className="absolute left-3 top-[46px] w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <div>
              <Label.Root htmlFor="volume" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Package className="w-4 h-4 mr-2 text-gray-500" />
                Alan Ölçüsü (m²) (opsiyonel)
              </Label.Root>

              <div className="relative">
                <input
                  type="text"
                  id="volume"
                  name="volume"
                  placeholder="Örn: 24 m² (bilmiyorsanız boş bırakabilirsiniz)"
                  className="w-full px-4 py-2 pl-10 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Proje Detayları */}
          <div>
            <Label.Root htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
              Proje Detayları <span className="text-red-500">*</span>
            </Label.Root>

            <textarea
              id="details"
              name="details"
              rows={6}
              required
              placeholder={`Projenizle ilgili paylaşmak istediğiniz detayları yazabilirsiniz.
(Alan ölçüsü, özel beklentiler, referanslar, örnek çalışmalar vb.)`}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="pt-6">
        <button
          type="submit"
          className="w-full bg-gold text-neutral-900 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-gold/80 transition-all duration-200 hover:shadow-xl active:scale-95 flex items-center justify-center space-x-2"
        >
          <span>Teklif Talebini Gönder</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          Formu göndererek gizlilik politikamızı kabul etmiş olursunuz.
        </p>
      </div>
    </form>
  );
}
