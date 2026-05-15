export function generateInviteCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let token = "";

  for (let i = 0; i < 6; i += 1) {
    token += chars[Math.floor(Math.random() * chars.length)];
  }

  return `DC-BETA-${token}`;
}
