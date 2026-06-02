import { eq } from "drizzle-orm";
import { db } from "@/db";
import { users, type User } from "@/db/schema";

type UpsertGoogleUserInput = {
  email: string;
  name?: string | null;
  image?: string | null;
  googleId?: string | null;
};

export async function upsertGoogleUser({
  email,
  name,
  image,
  googleId,
}: UpsertGoogleUserInput): Promise<User> {
  const normalizedEmail = email.trim().toLowerCase();

  await db
    .insert(users)
    .values({
      email: normalizedEmail,
      name: name ?? null,
      image: image ?? null,
      googleId: googleId ?? null,
    })
    .onConflictDoUpdate({
      target: users.email,
      set: {
        name: name ?? null,
        image: image ?? null,
        googleId: googleId ?? null,
        updatedAt: new Date(),
      },
    });

  const [savedUser] = await db.select().from(users).where(eq(users.email, normalizedEmail)).limit(1);

  if (!savedUser) {
    throw new Error("Failed to load user after Google sign-in");
  }

  return savedUser;
}
