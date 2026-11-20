# MS Digital Media – Next.js (App Router)

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

- `/` – one scrolling page: Home, About, Services, Contact (nav scroll-spy, smooth scroll)
- `/services/[slug]` – six service pages (seo, social-media-marketing, social-media-management, personal-branding, web-development, conversion-copywriting)
- `data/services.js` – all service copy; `components/illustrations.js` – hero illustrations
- `public/logo.png` and `public/images/*` – replace with your original logo / real photos (same file names)
- `components/ContactForm.jsx` – form currently shows a thank-you message only; connect it to your email/API route
