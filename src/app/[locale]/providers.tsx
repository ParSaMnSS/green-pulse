
'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { I18nProviderClient } from '@/i18n/provider';
import MotionProvider from './providers/MotionProvider';

export function Providers({ children, locale }: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <I18nProviderClient locale={locale}>
      <MotionProvider>
        {children}
        <ProgressBar
          height="4px"
          color="#000"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </MotionProvider>
    </I18nProviderClient>
  );
}
