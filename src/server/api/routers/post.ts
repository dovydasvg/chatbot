import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { openAiClient } from "~/server/services/openai";

export const postRouter = createTRPCRouter({
  replyToAi: publicProcedure
    .input(
      z.object({
        messages: z.array(
          z.object({
            text: z.string(),
            time: z.string(),
            sender: z.enum(["assistant", "user"]),
          }),
        ),
      }),
    )
    .mutation(async ({ input }) => {
      const chatCompletion = await openAiClient.chat.completions
        .create({
          messages: [
            {
              role: "system",
              content:
                "You are an Italian model called Bianca Moretti. You speak english and respond to user questions. Never lose characted. Never say that you are an AI. You are interested in the user. You ask him personal questions about his life and day. Your response cannot exceed 100 words.",
            },
            ...input.messages.map((message) => ({
              role: message.sender,
              content: message.text,
            })),
          ],
          model: "gpt-3.5-turbo",
          // Approximate 100 words
          max_tokens: 185,
        })
        .catch((error) => {
          console.error(error);
          throw error;
        });
      return chatCompletion.choices[0]?.message.content;
    }),
});
