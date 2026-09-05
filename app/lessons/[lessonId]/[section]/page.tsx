import { notFound } from 'next/navigation';
import { isLessonId } from '@/lib/lessons';
import StudyApp, { type Section } from '../../../study-app';
export default async function LessonPage({
  params,
}: {
  params: Promise<{ lessonId: string; section: string }>;
}) {
  const { lessonId, section } = await params;
  if (
    !isLessonId(lessonId) ||
    !['vocabulary', 'grammar', 'practice'].includes(section)
  )
    notFound();
  return (
    <StudyApp
      key={`${lessonId}-${section}`}
      lessonId={Number(lessonId)}
      section={section as Section}
    />
  );
}
