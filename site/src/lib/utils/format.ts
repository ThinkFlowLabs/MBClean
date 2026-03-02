/**
 * Format a phone number for display
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  if (cleaned.length === 11 && cleaned[0] === '1') {
    return `(${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  return phone;
}

/**
 * Format a phone number for tel: links
 */
export function telLink(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, '')}`;
}

/**
 * Format a price range for display
 */
export function formatPriceRange(min: number, max: number, unit: string): string {
  const formatNum = (n: number) =>
    n >= 1 ? `$${n.toFixed(0)}` : `$${n.toFixed(2)}`;
  return `${formatNum(min)} – ${formatNum(max)} ${unit}`;
}

/**
 * Format a number with commas
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

/**
 * Slugify a string
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Calculate reading time from HTML content
 */
export function readingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '…';
}

/**
 * Generate breadcrumb items from a pathname
 */
export function pathToBreadcrumbs(
  pathname: string,
  labels?: Record<string, string>
): { label: string; href: string }[] {
  const segments = pathname.split('/').filter(Boolean);
  return segments.map((segment, index) => ({
    label: labels?.[segment] ?? segment.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    href: '/' + segments.slice(0, index + 1).join('/'),
  }));
}
