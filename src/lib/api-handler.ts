import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { authConfig } from "@/config/auth.config";

type RouteHandler = (
  request: NextRequest,
  context: { params: Promise<Record<string, string>> },
) => Promise<Response> | Response;

type ApiHandlerOptions = {
  requireAuth?: boolean;
  requireAdmin?: boolean;
};

export function createApiHandler(
  handler: RouteHandler,
  options: ApiHandlerOptions = {},
): RouteHandler {
  return async (request, context) => {
    try {
      if (options.requireAuth || options.requireAdmin) {
        const { auth } = await import("@/lib/auth");
        const session = await auth();

        if (!session?.user) {
          return NextResponse.json(
            { success: false, error: "Unauthorized" },
            { status: 401 },
          );
        }

        if (options.requireAdmin && session.user.role !== "ADMIN") {
          return NextResponse.json(
            { success: false, error: "Forbidden" },
            { status: 403 },
          );
        }
      }

      return await handler(request, context);
    } catch (error) {
      console.error("[API Error]", error);

      const message =
        error instanceof Error ? error.message : "Internal server error";

      return NextResponse.json(
        { success: false, error: message },
        { status: 500 },
      );
    }
  };
}

export { authConfig };
