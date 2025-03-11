export type PageKey = 'liity' | 'en' | 'toiminta' | 'talli' | 'kalusto' | 'yhteystiedot' | 'projektiautot' | 'historia' | 'tak75' | 'yhteistyo' | 'ratapaivat' | 'aanitorvet';

export const pages: {
  [key in PageKey]: {
    title: string;
    href: string;
    slug: string;
  };
} = {
  liity: {
    title: 'Liity',
    href: '/liity',
    slug: 'liity',
  },
  en: {
    title: 'In English',
    href: "/en",
    slug: "en"
  },
  toiminta: {
    title: 'Toiminta',
    href: '/toiminta',
    slug: 'toiminta',
  },
  talli: {
    title: 'Talli',
    href: '/talli',
    slug: 'talli',
  },
  kalusto: {
    title: 'Kalusto',
    href: '/kalusto',
    slug: 'kalusto',
  },
  yhteystiedot: {
    title: 'Yhteystiedot',
    href: '/yhteystiedot',
    slug: 'yhteystiedot',
  },
  projektiautot: {
    title: 'Projektiautot',
    href: '/nayttely',
    slug: 'nayttely',
  },
  historia: {
    title: 'Historia',
    href: '/historia',
    slug: 'historia',
  },
  tak75: {
    title: '75-vuotisjuhlat',
    href: '/tak-75',
    slug: 'tak75',
  },
  yhteistyo: {
    title: 'Yhteistyö',
    href: '/yhteistyo',
    slug: 'yhteistyo',
  },
  ratapaivat: {
    title: 'Ratapäivät',
    href: '/ratapäivät',
    slug: 'ratapäivät'
  },
  aanitorvet: {
    title: 'Äänitorvi',
    href: '/äänitorvi',
    slug: 'äänitorvi'
  }
}

export const headerPages: Partial<{
  [key in PageKey]: {
    title: string;
    href: string;
    slug: string
  };
}> = {
  liity: pages.liity,
  toiminta: pages.toiminta,
  talli: pages.talli,
  kalusto: pages.kalusto,
  projektiautot: pages.projektiautot,
  yhteystiedot: pages.yhteystiedot,
  en: pages.en
};

export const footerPages: Partial<{
  [key in PageKey]: {
    title: string;
    href: string;
  };
}> = {
  toiminta: pages.toiminta,
  ratapaivat: pages.ratapaivat,
  aanitorvet: pages.aanitorvet,
  talli: pages.talli,
  kalusto: pages.kalusto,
  yhteystiedot: pages.yhteystiedot,
  historia: pages.historia,
  projektiautot: pages.projektiautot,
  yhteistyo: pages.yhteistyo,
  tak75: pages.tak75,
};