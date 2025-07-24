import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Definește rutele care trebuie să fie publice (accesibile fără autentificare)
const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)', '/api/webhooks(.*)']); // Adaugă aici orice altă rută publică

export default clerkMiddleware(async (auth, request) => { // <-- Adaugă 'async' aici
  // Acum, folosește 'await' pentru a obține obiectul auth din Promise
  const { userId, redirectToSignIn } = await auth(); // <-- Adaugă 'await' aici

  // Verifică dacă utilizatorul nu este autentificat ȘI dacă ruta nu este publică
  if (!userId && !isPublicRoute(request)) { // Acum 'userId' va fi disponibil
    // Redirecționează utilizatorul către pagina de login
    return redirectToSignIn();
  }

  // Permite accesul dacă utilizatorul este autentificat SAU dacă ruta este publică
  return; // Nu este necesar să returnezi NextResponse.next() explicit aici, Clerk face asta implicit
});

export const config = {
  matcher: [
    // Asigură-te că middleware-ul rulează pentru toate rutele care pot necesita autentificare
    // Aceasta este o abordare mai sigură, apoi excluzi publicRoutes în logica de mai sus
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Rulează pentru rutele API
    '/(api|trpc)(.*)',
  ],
};