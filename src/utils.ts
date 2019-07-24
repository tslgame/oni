import { forEach } from "lodash-es";

export function attachProps<
  TTarget,
  TSubComponents extends Record<string, any>
>(component: TTarget, subComponents: TSubComponents): TTarget & TSubComponents {
  const c = component as TTarget & TSubComponents;
  forEach(subComponents, (component, key) => {
    c[key] = component;
  });
  return c;
}

export function isNotNull<T>(x: T | null | undefined): x is T {
  return x != null;
}

export function maybeArray(x: string | string[]): string[] {
  if (Array.isArray(x)) {
    return x;
  }
  return [x];
}

export function keysOfType<T>(type: T): (keyof T)[] {
  return Object.keys(type) as any;
}
