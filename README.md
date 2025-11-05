# Pantane — Built Different. Built for You(th).

Pantane is a responsive web app and starter scaffold designed to empower youth with learning, work, mentorship, and community features.

Key product areas:
- Find Skills — free & paid courses (tech, business, creativity)
- Find Work — local gigs, internships, remote jobs, microtasks
- Find Mentors — chat / book sessions with verified pros
- Community — discussion boards for collaboration

Mission: “Pantane — Built Different. Built for You(th).”

Tech stack
- Next.js (React)
- Tailwind CSS
- Firebase Auth (email, Google, phone)
- Stripe (payments for premium courses)
- Placeholder: you can plug in Postgres / Firestore for data persistence

Quickstart (local)
1. Copy repository locally.
2. Create a .env.local file at project root with:
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
   NEXT_PUBLIC_FIREBASE_APP_ID=...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...
   STRIPE_SECRET_KEY=...
   NEXT_PUBLIC_APP_NAME=Pantane
3. Install dependencies:
   npm install
4. Run development server:
   npm run dev
5. Open http://localhost:3000

What’s included
- Responsive homepage with hero, feature highlights, and impact section
- Login and Sign-up pages using Firebase (email + Google + phone skeleton)
- Dashboard with recommended items (courses, gigs, mentors)
- Admin panel skeleton for user and listing management
- Stripe checkout API route for premium courses (server-side)
- Tailwind-based design, easily customizable brand colors

Notes & next steps
- The scaffold includes UI and authentication wiring (Firebase client). Add a database (Firestore / Postgres + API) for storing courses, gigs, mentors, bookings, and admin data.
- Add Stripe webhooks to securely confirm purchases.
- Implement proper role-based access control for Admin.
- Add messaging or booking flows for mentors, and a community forum (Discourse / custom solution).

Contact
If you want, tell me what tech stack you prefer for the backend database and I’ll extend the scaffold with data models, API endpoints, and more complete admin actions.