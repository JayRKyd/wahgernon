import { clerkMiddleware, authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',

    '/api/uploadthing'
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',

    '/api/uploadthing'
  ]
});

export const config = {
  matcher: ["/((?!.*\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};