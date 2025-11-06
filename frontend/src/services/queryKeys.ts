export const queryKeys = {
  user: {
    me: () => ["user", "me"] as const,
    byId: (id: string | number) => ["user", "by-id", String(id)] as const,
    list: (filters?: Record<string, unknown>) =>
      ["user", "list", filters ?? {}] as const,
  },
  project: {
    list: (filters?: Record<string, unknown>) =>
      ["project", "list", filters ?? {}] as const,
    byId: (id: string | number) => ["project", "by-id", String(id)] as const,
  },
  // add more domains here
} as const;


