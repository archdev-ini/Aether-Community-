// This file is used to force dynamic rendering for the /events route.
// This ensures that the event list is always up-to-date.
export const dynamic = 'force-dynamic';

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
