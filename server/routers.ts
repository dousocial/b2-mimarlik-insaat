import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { isMailerConfigured, sendProposalEmail } from "./_core/mailer";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  contact: router({
    send: publicProcedure
      .input(
        z.object({
          name: z.string().min(2).max(120),
          email: z.string().email(),
          phone: z.string().optional().nullable(),
          projectType: z.string().optional().nullable(),
          message: z.string().min(10).max(2000),
        })
      )
      .mutation(async ({ input }) => {
        if (!isMailerConfigured()) {
          return {
            success: false,
            code: "MAILER_NOT_CONFIGURED",
            message: "Email service is not configured.",
          } as const;
        }

        try {
          await sendProposalEmail({
            name: input.name,
            email: input.email,
            phone: input.phone || undefined,
            projectType: input.projectType || undefined,
            message: input.message,
          });
        } catch (error) {
          console.error("[Email] Failed to send proposal email", error);
          return {
            success: false,
            code: "MAILER_SEND_FAILED",
            message: "Email delivery failed.",
          } as const;
        }

        return {
          success: true,
        } as const;
      }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
