export function ulid() {
  return Math.random()
    .toString(16)
    .slice(2)
}
