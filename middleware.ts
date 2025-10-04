import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routes"

export default createMiddleware(routing)

export const config = {
  matcher: ["/", "/(tr|ru|en)/:path*"],
}
