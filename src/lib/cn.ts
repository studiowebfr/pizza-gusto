import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusionne des classes Tailwind en résolvant les conflits (ex. une classe de
 * base `relative` écrasée par un `absolute` passé par l'appelant) — sans ça,
 * l'ordre de cascade entre classes concaténées en texte n'est pas garanti.
 */
export function cn(...entrees: ClassValue[]) {
  return twMerge(clsx(entrees));
}
