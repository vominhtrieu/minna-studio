'use client';
import { Fragment, useId, useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { segmentReadings } from '@/lib/furigana';
import { hanVietFor } from '@/lib/han-viet';
import { hasSelectedTextWithin } from '@/lib/text-selection';

function ReadingWord({
  text,
  reading,
  selectable,
}: {
  text: string;
  reading: string;
  selectable: boolean;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const hanViet = hanVietFor(text);
  const label = `${text} — Furigana: ${reading}${hanViet ? ` — Hán Việt: ${hanViet}` : ''}`;
  const selectableTrigger = selectable ? (
    // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role -- Inline text must support selection across words; Enter/Space handling is supplied below.
    <span role="button" tabIndex={0} aria-label={label} />
  ) : undefined;
  return (
    <Tooltip open={open} onOpenChange={setOpen} triggerId={id}>
      <TooltipTrigger
        id={id}
        type={selectable ? undefined : 'button'}
        render={selectableTrigger}
        className="furigana-word"
        lang="ja"
        closeOnClick={false}
        aria-label={label}
        aria-expanded={open}
        onClick={(event) => {
          event.stopPropagation();
          if (selectable && hasSelectedTextWithin(event.currentTarget)) return;
          if (!selectable) event.preventDefault();
          setOpen(true);
        }}
        onKeyDown={(event) => {
          if (selectable && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            event.stopPropagation();
            setOpen(true);
          }
        }}
      >
        {text}
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={5} className="furigana-reading">
        <span className="furigana-reading-label">Furigana</span>
        <span className="furigana-reading-value" lang="ja">
          {reading}
        </span>
        {hanViet ? (
          <>
            <span className="furigana-reading-label">Hán Việt</span>
            <span className="furigana-reading-value" lang="vi">
              {hanViet}
            </span>
          </>
        ) : null}
      </TooltipContent>
    </Tooltip>
  );
}

/** Split mixed Vietnamese/Japanese copy without changing its characters. */
export default function JapaneseText({
  text,
  readings = true,
  readingHint,
  wordHints,
  selectable = false,
}: {
  text: string;
  readings?: boolean;
  readingHint?: string;
  wordHints?: Record<string, string>;
  /** Render reading triggers as selectable inline text inside flashcards. */
  selectable?: boolean;
}) {
  return (
    <TooltipProvider delay={120}>
      {segmentReadings(text, readingHint, wordHints).map((segment, i) => (
        <Fragment key={`${i}-${segment.text}`}>
          {segment.reading && readings ? (
            <ReadingWord
              text={segment.text}
              reading={segment.reading}
              selectable={selectable}
            />
          ) : (
            <span lang={segment.japanese ? 'ja' : 'vi'}>{segment.text}</span>
          )}
        </Fragment>
      ))}
    </TooltipProvider>
  );
}
