import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  root: 'body',
  revision: 1,
  autoShow: true,
  // This ensures GA cookies are deleted if the user later unchecks the box
  disablePageInteraction: false, 
  
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      // autoClear is vital for GDPR compliance if a user revokes consent
      autoClear: {
        cookies: [
          { name: /^(_ga|_gid)/ }, // Clear GA4 cookies
        ]
      },
      services: {
        ga4: {
          label: '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4</a>',
          onAccept: () => {
            console.log('ga4 accepted');
          },
          onReject: () => {
            console.log('ga4 rejected');
          },
          cookies: [
            { name: /^_ga/ },
          ],
        },
      },
    },
  },

  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: "Hello traveller, it's cookie time!",
          description: 'We use cookies to understand how you interact with our site and to improve your experience.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          footer: '<a href="/privacy">Privacy Policy</a>\n<a href="/terms">Terms and conditions</a>',
        },
        preferencesModal: {
          title: 'Consent Preferences Center',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close modal',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Cookie Usage',
              description: 'We use cookies to ensure the basic functions of the website and to enhance your online experience.',
            },
            {
              title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics Cookies',
              description: 'Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description: 'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="mailto:info@yourdomain.com">contact me</a>.',
            },
          ],
        },
      },
      // Turkish translations...
      tr: {
        consentModal: {
          title: "Çerezleri Kabul Ediyor musunuz?",
          description: 'Web sitemizi nasıl kullandığınızı anlamak ve deneyiminizi geliştirmek için çerezleri kullanıyoruz.',
          acceptAllBtn: 'Hepsini Kabul Et',
          acceptNecessaryBtn: 'Tümünü Reddet',
          showPreferencesBtn: 'Tercihleri Yönet',
          footer: '<a href="/gizlilik">Gizlilik Politikası</a>',
        },
        preferencesModal: {
          title: 'Çerez Tercihleri Merkezi',
          acceptAllBtn: 'Hepsini Kabul Et',
          acceptNecessaryBtn: 'Tümünü Reddet',
          savePreferencesBtn: 'Tercihleri Kaydet',
          sections: [
            {
              title: 'Gerekli Çerezler',
              description: 'Bu çerezler web sitesinin çalışması için gereklidir.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics Çerezleri',
              description: 'Ziyaretçilerin web sitesiyle nasıl etkileşime girdiğini anlamak için kullanılır.',
              linkedCategory: 'analytics',
            }
          ]
        }
      }
    },
  },
};