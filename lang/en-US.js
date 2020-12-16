export default () => {
  return new Promise(function (resolve) {
    resolve({
      nav: [
        { title: 'Home', link: '/', hashTag: '' },
        { title: 'Tech stack & Market', link: '/tech-stack-and-market', hashTag: '#tech-stack-and-market' },
        { title: 'Roadmap', link: '/road-map', hashTag: '#roadmap' },
        { title: 'Community', link: '#community', hashTag: '#community' },
        { title: 'Wallet', href: 'http://onelink.to/xyqb5u' },
        { title: 'Contact', link: '/contact', hashTag: '#contact' }
      ],
      buyTokens: {
        title: 'BUY TOKENS',
        menuButtons: [
          { title: 'Home', link: '/' },
          { title: 'Tech stack & Market', link: '/tech-stack-and-market', hashTag: '#tech-stack-and-market' },
          { title: 'Roadmap', link: '/road-map', hashTag: '#roadmap' },
          { title: 'Community', link: '#community', hashTag: '#community' },
          { title: 'Wallet', href: 'http://onelink.to/xyqb5u' },
          { title: 'White Paper', href: 'http://bit.ly/masphere-whitepaper' },
          { title: 'Contact', link: '/contact', hashTag: '#contact' }
        ]
      },
      footer: {
        title: 'Join MASphere and have your own Crypto Planet.',
        buttonBuyTokens: {
          subText: 'Join now',
          keyText: 'BUY TOKENS'
        }
      },
      roadMap: [
        { phase: 'Phase 1: 6 months', description: 'Build 1 Planet (owned by the developer) as a prototype to show a potential.', image: '/images/icon_roadmap_p1.png', more: 'More details' },
        { phase: 'Phase 2: 3 months', description: 'Build 20-30 Planet for owners who have bought during the presale period.', image: '/images/icon_roadmap_p2.png', more: 'More details' },
        { phase: 'Phase 3: 3-6 months', description: 'Provide a more detailed tech tree and add new features.', image: '/images/icon_roadmap_p3.png', more: 'More details' },
        { phase: 'Phase 4: 3-6 months', descriptions: ['Develop the auto-expansion system for the universe;', '​Create trade-lines among planets;', 'Introduce rocket launch to players (both Lords and People);​', 'Provide a new tech tree for new features.'], image: '/images/icon_roadmap_p4.png', more: 'More details' },
        { phase: 'Phase 5: 6 months', description: 'Provide the full tech tree. Introduce War', image: '/images/icon_roadmap_p5.png', more: 'More details' }
      ],
      invitation: {
        connectUs: 'Connect Us',
        connectUsText: 'To up to date the latest News',
        subscribe: 'Email Subscribe',
        subscribeText: 'Subscribe to receive our newsletters about updates and event of MASphere'
      },
      contact: {
        contactUs: {
          name: 'Contact Us',
          address: [
            'Address insert here',
            'Address insert here',
            'Address insert here'
          ],
          phone: {
            number: '0987654321'
          },
          fax: {
            number: '0987654321'
          }
        },
        getInTouch: {
          name: 'Get in Touch',
          contactCategories: {
            description: 'Contact Categories',
            child: [
              { name: 'Investment Opportunity', email: 'investor@masphere.com', image: '/images/investment.png' },
              { name: 'Support Contact', email: 'support@masphere.com', image: '/images/support.png' },
              { name: 'Partnership Interest', email: 'partners@masphere.com', image: '/images/partnership.png' },
              { name: 'Press and Publishes', email: 'press@masphere.com', image: '/images/press.png' },
              { name: 'Accounting Support', email: 'accounting@masphere.com', image: '/images/accounting.png' }
            ]
          },
          contactForm: {
            description: 'Fill out this form and we will contact you',
            textSend: 'SEND',
            privacyPolicy: {
              link: 'Privacy Policy',
              text1: 'I agree the processing of my personal data. Click ',
              text2: 'for more info'
            },
            inputName: { image: '/images/card-name.png', placeholder: 'Full name*' },
            inputMail: { image: '/images/mail.png', placeholder: 'Email*' },
            inputPhone: { image: '/images/phone.png', placeholder: 'Phone' },
            inputMessage: { image: '/images/message.png', placeholder: 'Message*' }
          }
        }
      },
      textStackAndMarket: {
        market: {
          name: 'Market',
          marketSize: {
            name: 'Market Size', description: 'of the total smartphone users play games on their mobile phones.'
          },
          profitability: {
            name: 'Profitability', description: 'Revenues by Mobile Games', subtraction: 'Revenues by non-game apps'
          }
        },
        technologyStack: {
          name: 'Technology Stack',
          moreInfo: {
            link: 'Click here',
            text: 'for more info'
          },
          child: [
            {
              description: 'Unity, a cross-platform game engine developed by Unity Technologies. The engine can be used to create 3D & 2D, virtual reality, and augmented reality games, as well as simulations and other experiences.',
              image: '/images/unity.png',
              to: 'https://unity.com/'
            },
            {
              description: 'Spine, a 2D skeletal animation software for video games which requires less art asset, allows manipulated through code and offers a smaller size of product.',
              image: '/images/spine.png',
              to: 'http://vi.esotericsoftware.com/'
            },
            {
              description: "Google's mobile platform that helps instantly adjust apps and offers better personally customized in-app experience.",
              image: '/images/firebase.png',
              to: 'https://firebase.google.com/'
            }
          ]
        }
      },
      presalePhase: {
        planetPhase1: {
          phaseExclusive: {
            description: 'PHASE 1 EXCLUSIVE',
            child: [
              { p: 'Available for MAS only.' },
              { p: 'Get 15% off.' },
              { p: 'Up to 5% Early bird bonus.' }
            ]
          },
          planetContent: [
            {
              name: 'Common',
              length: 2,
              value: 50000,
              mas: 85000,
              image: '/images/common-planet.png',
              beforeSale: 100000,
              percentage: 20
            },
            {
              name: 'Uncommon',
              length: 6,
              value: 110000,
              mas: 170000,
              sale: 10,
              image: '/images/uncommon-planet.png',
              beforeSale: 200000,
              percentage: 60
            },
            {
              name: 'Rare',
              length: 15,
              value: 325000,
              mas: 425000,
              sale: 30,
              image: '/images/rare-planet.png',
              beforeSale: 500000,
              percentage: 75
            },
            {
              name: 'Epic',
              length: 0,
              value: 700000,
              mas: 850000,
              sale: 40,
              image: '/images/epic-planet.png',
              beforeSale: 1000000,
              percentage: 0
            },
            {
              name: 'Legendary',
              length: null,
              value: 3875000,
              mas: 4250000,
              sale: 55,
              image: '/images/legendary-planet.png',
              beforeSale: 5000000,
              disableContent: true,
              percentage: 100
            }
          ]
        },
        planetPhase2: {
          phaseExclusive: {
            description: 'PHASE 2 EXCLUSIVE',
            child: [
              { p: 'Available for all Crypto-currencies (BTC.ETH, MAS, etc.)' },
              { p: 'Get 10% off.' },
              { p: 'Early bird bonus' }
            ]
          },
          planetContent: [
            {
              name: 'Common',
              length: '???',
              value: 50000,
              mas: 90000,
              image: '/images/common-planet.png',
              beforeSale: 100000,
              disableContent: true,
              percentage: 100
            },
            {
              name: 'Uncommon',
              length: '???',
              value: 110000,
              mas: 180000,
              sale: 10,
              image: '/images/uncommon-planet.png',
              beforeSale: 200000,
              disableContent: true,
              percentage: 100
            },
            {
              name: 'Rare',
              length: '???',
              value: 325000,
              mas: 450000,
              sale: 30,
              image: '/images/rare-planet.png',
              beforeSale: 500000,
              disableContent: true,
              percentage: 100
            },
            {
              name: 'Epic',
              length: '???',
              value: 700000,
              mas: 900000,
              sale: 40,
              image: '/images/epic-planet.png',
              beforeSale: 1000000,
              disableContent: true,
              percentage: 100
            },
            {
              name: 'Legendary',
              length: '???',
              value: 3875000,
              mas: 4500000,
              sale: 55,
              image: '/images/legendary-planet.png',
              beforeSale: 5000000,
              disableContent: true,
              percentage: 100
            }
          ]
        },
        planetPhase3: {
          phaseExclusive: {
            description: 'PHASE 3 EXCLUSIVE',
            child: [
              { p: 'Available for all Crypto-currencies (BTC.ETH, MAS, etc.)' },
              { p: 'Early bird bonus' }
            ]
          },
          planetContent: [
            {
              name: 'Common',
              length: '???',
              value: 50000,
              mas: 100000,
              image: '/images/common-planet.png',
              disableContent: true,
              percentage: 100
            },
            {
              name: 'Uncommon',
              length: '???',
              value: 110000,
              mas: 200000,
              sale: 10,
              image: '/images/uncommon-planet.png',
              disableContent: true,
              percentage: 100
            },
            {
              name: 'Rare',
              length: '???',
              value: 325000,
              mas: 500000,
              sale: 30,
              image: '/images/rare-planet.png',
              disableContent: true,
              percentage: 100
            },
            {
              name: 'Epic',
              length: '???',
              value: 700000,
              mas: 1000000,
              sale: 40,
              image: '/images/epic-planet.png',
              disableContent: true,
              percentage: 100
            },
            {
              name: 'Legendary',
              length: '???',
              value: 3875000,
              mas: 5000000,
              sale: 55,
              image: '/images/legendary-planet.png',
              disableContent: true,
              percentage: 100
            }
          ]
        },
        countDown: {
          description: 'OPEN FOR PUBLIC SALE IN'
        },
        register: {
          buttonContent: 'REGISTER',
          image: '/images/register-bg.png',
          description: 'To access to the purchase link up to 2 hours earlier.',
          labelLocation: [
            { name: 'REGISTERED PIONEER' },
            { name: 'REGISTERED' },
            { name: 'NON REGISTERED' }
          ],
          salePriotity: {
            description: 'SALE PRIOTITY',
            child: [
              { p: 'Sales prioritize in order of arrival.' },
              { p: 'Once out of stocks, remaining buyer get prioritized for higher tier of MASpheres.' },
              { p: 'Buyer get 100% refund if not eligible for pre-purchase (with 1000 MAS gas)' }
            ]
          }
        },
        purchase: {
          guide: [
            'Mobile User: Scan the QR code using <a href="http://onelink.to/xyqb5u" target="_blank">Midas wallet</a>',
            'PC User: Use <a href="https://metamask.io/" target="_blank">MetaMask</a> to send MAS using purchase address below',
            'You can buy more than 1 MASphere',
            'We shall proceed the purchase order and send you an email to confirm your item.',
            'If there are too many buyers and you are not eligible to buy in this phase, we will send you a 100% refund (with 1000 MAS gas)'
          ]
        }
      }
    })
  })
}
