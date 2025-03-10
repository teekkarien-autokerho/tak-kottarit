import { type PageKey } from './pages'

export const joinButtonContent: {
  [key in Extract<PageKey, 'liity' | 'english'>]: {
    text: string;
    url: string;
  };
} = {
  liity: {
    text: "Liity jäseneksi",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScR0rIZMuNTWpo0tdgL_iYiX0mrDn2oRDN3dYAgCDZ_lgokqw/viewform",
  },
  english: {
    text: "Join Us",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScR0rIZMuNTWpo0tdgL_iYiX0mrDn2oRDN3dYAgCDZ_lgokqw/viewform",
  },
};