import { useEffect } from 'react';
import { site } from '../config/site';

export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
    const pathname = window.location.pathname;
    const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = `${site.domain}${path}`;
  }, [title]);
};
