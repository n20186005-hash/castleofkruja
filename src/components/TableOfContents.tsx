import { useTranslations } from 'next-intl';
import React from 'react';

export default function TableOfContents() {
  const t = useTranslations('toc');

  return (
    <div className="sticky top-16 z-40 w-full border-b backdrop-blur-md bg-opacity-90" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6 overflow-x-auto py-3 hide-scrollbar text-sm font-medium">
          <a href="#tickets" className="whitespace-nowrap transition-colors hover:opacity-70" style={{ color: 'var(--text-primary)' }}>{t('tickets')}</a>
          <a href="#practical" className="whitespace-nowrap transition-colors hover:opacity-70" style={{ color: 'var(--text-primary)' }}>{t('practical')}</a>
          <a href="#history" className="whitespace-nowrap transition-colors hover:opacity-70" style={{ color: 'var(--text-primary)' }}>{t('history')}</a>
          <a href="#architecture" className="whitespace-nowrap transition-colors hover:opacity-70" style={{ color: 'var(--text-primary)' }}>{t('architecture')}</a>
          <a href="#transport" className="whitespace-nowrap transition-colors hover:opacity-70" style={{ color: 'var(--text-primary)' }}>{t('transport')}</a>
          <a href="#reviews" className="whitespace-nowrap transition-colors hover:opacity-70" style={{ color: 'var(--text-primary)' }}>{t('reviews')}</a>
        </div>
      </div>
    </div>
  );
}
