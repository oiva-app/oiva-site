export function withBase(path: string) {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;

  return `${normalizedBase}${path.replace(/^\/+/, "")}`;
}

export function withoutBase(path: string) {
  const base = import.meta.env.BASE_URL;

  if (base === "/") {
    return path;
  }

  const normalizedBase = base.replace(/\/$/, "");

  if (path === normalizedBase) {
    return "/";
  }

  if (path.startsWith(`${normalizedBase}/`)) {
    return path.slice(normalizedBase.length);
  }

  return path;
}
