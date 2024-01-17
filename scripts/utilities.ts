import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

interface ICn {
  (...inputs: ClassValue[]): string
}

export const cn: ICn = (...inputs) => twMerge(clsx(inputs))

interface ILocal {
  (key: string, value?: unknown | null): unknown | void;
}

export const local: ILocal = (key, value = null): object => {
  if (value != null) localStorage[key] = JSON.stringify(value);
  return localStorage?.[key] && JSON.parse(localStorage[key]);
};

interface ISleep {
  (ms: number): Promise<unknown>
}

export const sleep: ISleep = (ms) => new Promise((r) => setTimeout(r, ms));
