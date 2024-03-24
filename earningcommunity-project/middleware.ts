import {
  NextMiddleware,
  NextResponse,
  NextRequest
} from "next/server";
import checkAuth from "./middleware/checkAuth";
import checkAdmin from "./middleware/checkAdmin";

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export function stackMiddlewares(functions: MiddlewareFactory[] = [], index = 0): NextMiddleware {
  
  const current = functions[index];
  if (current) {
      const next = stackMiddlewares(functions, index + 1);
      return current(next);
  }
  return () => NextResponse.next();
}
const middlewares = [checkAuth,checkAdmin];
export default stackMiddlewares(middlewares);

export const config = {
  matcher: '/apis/:path*',
}