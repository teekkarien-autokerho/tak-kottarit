type pageKey = 'liity' | 'toiminta' | 'talli' | 'kalusto' | 'yhteystiedot' | 'projektiautot' | 'historia';

export const pages: {
  [key in pageKey]: {
    title: string;
    href: string;
  };
} = {
  liity: {
    title: 'Liity',
    href: '/liity',
  },
  toiminta: {
    title: 'Toiminta',
    href: '/toiminta',
  },
  talli: {
    title: 'Talli',
    href: '/talli',
  },
  kalusto: {
    title: 'Kalusto',
    href: '/kalusto',
  },
  yhteystiedot: {
    title: 'Yhteystiedot',
    href: '/yhteystiedot',
  },
  projektiautot: {
    title: 'Projektiautot',
    href: '/nayttely',
  },
  historia: {
    title: 'Historia',
    href: '/historia',
  }
}

export const headerPages: Partial<{
  [key in pageKey]: {
    title: string;
    href: string;
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