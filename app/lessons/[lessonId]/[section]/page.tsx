import { notFound } from 'next/navigation';
import { isLessonId, lessonIds } from '@/lib/lessons';
import StudyApp, { type Section } from '../../../study-app';

const sections: Section[] = ['vocabulary', 'grammar', 'practice'];

export function generateStaticParams() {
  return lessonIds.flatMap((lessonId) =>
    sections.map((section) => ({ lessonId: String(lessonId), section })),
  );
}

export const dynamicParams = false;

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lessonId: string; section: string }>;
}) {
  const { lessonId, section } = await params;
  if (!isLessonId(lessonId) || !sections.includes(section as Section))
    notFound();
  return (
    <StudyApp
      key={`${lessonId}-${section}`}
      lessonId={Number(lessonId)}
      section={section as Section}
    />
  );
}
