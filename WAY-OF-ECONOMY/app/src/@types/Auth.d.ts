import type { LogonType } from "./logons";

export type Auth = Pick<LogonType, "name" | "role" | "permissions" | "avatar">;