import { createElement, type ComponentPropsWithoutRef } from 'react';

/**
 * Use document navigation for the existing routed pages. The current Vinext
 * production Link cancels the click and then throws inside its RSC navigation
 * runtime. Native anchors preserve keyboard, history and open-in-new-tab
 * behavior without depending on that broken client-side path.
 */
export default function AppLink(props: ComponentPropsWithoutRef<'a'>) {
  return createElement('a', props);
}
