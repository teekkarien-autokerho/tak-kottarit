type pageKey = 'liity' | 'toiminta' | 'talli' | 'kalusto' | 'yhteystiedot' | 'projektiautot' | 'historia';

export const pages: {
  [key in pageKey]: {
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
  }
}

export const headerPages: Partial<{
  [key in pageKey]: {
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
};

export const footerPages: Partial<{
  [key in pageKey]: {
    title: string;
    href: string;
  };
}> = {
  toiminta: pages.toiminta,
  talli: pages.talli,
  kalusto: pages.kalusto,
  yhteystiedot: pages.yhteystiedot,
  historia: pages.historia,
  projektiautot: pages.projektiautot,
};