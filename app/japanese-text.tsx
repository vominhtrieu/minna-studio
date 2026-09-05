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

function ReadingWord({ text, reading }: { text: string; reading: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const hanViet = hanVietFor(text);
  return (
    <Tooltip open={open} onOpenChange={setOpen} triggerId={id}>
      <TooltipTrigger
        id={id}
        type="button"
        className="furigana-word"
        lang="ja"
        closeOnClick={false}
        aria-label={`${text} — Furigana: ${reading}${hanViet ? ` — Hán Việt: ${hanViet}` : ''}`}
        aria-expanded={open}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setOpen(true);
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
}: {
  text: string;
  readings?: boolean;
}) {
  return (
    <TooltipProvider delay={120}>
      {segmentReadings(text).map((segment, i) => (
        <Fragment key={`${i}-${segment.text}`}>
          {segment.reading && readings ? (
            <ReadingWord text={segment.text} reading={segment.reading} />
          ) : (
            <span lang={segment.japanese ? 'ja' : 'vi'}>{segment.text}</span>
          )}
        </Fragment>
      ))}
    </TooltipProvider>
  );
}
