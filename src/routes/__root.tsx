import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import appCss from "@/styles.css?url";
import { LanguageProvider } from "@/i18n/LanguageContext";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "CrunchyTime — Fast Food në zemër të Pejës" },
      {
        name: "description",
        content:
          "CrunchyTime në Pejë: pulë crispy, sanduiçe, wrap-a dhe hot dog të freskët.",
      },
      { property: "og:image", content: "/logo.jpeg" },
      { name: "twitter:image", content: "/logo.jpeg" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.jpeg", type: "image/jpeg" },
      { rel: "apple-touch-icon", href: "/logo.jpeg" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold">404 — Page Not Found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Go Home
        </Link>
      </div>
    </div>
  ),
});

function RootComponent() {
  return (
    <html lang="sq">
      <head>
        <HeadContent />
      </head>
      <body>
        <LanguageProvider>
          <Outlet />
        </LanguageProvider>
        <Scripts />
      </body>
    </html>
  );
}