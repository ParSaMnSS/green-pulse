
'use client';

import { I18nProviderClient as NextI18nProviderClient } from './client';

export function I18nProviderClient({ children, locale }: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <NextI18nProviderClient locale={locale}>
      {children}
    </NextI18nProviderClient>
  );
}
