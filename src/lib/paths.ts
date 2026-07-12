/** The booking "paths" — all lead to the same Calendly intro call (BOOKING_URL). */
export type BookingPath = { label: string; desc: string };

export const BOOKING_PATHS: BookingPath[] = [
  {
    label: "Schedule a free Active Directory risk review",
    desc: "See exactly where your identity attack surface is exposed.",
  },
  {
    label: "Schedule an intro call",
    desc: "Not sure where to start? We'll map Falcon to your environment on a quick call.",
  },
  {
    label: "Schedule a free trial",
    desc: "Put Falcon to work in your own environment before you commit.",
  },
  {
    label: "Schedule an AI vulnerability check",
    desc: "Find where shadow AI and prompt-injection risks live — and how to safeguard against them.",
  },
];
