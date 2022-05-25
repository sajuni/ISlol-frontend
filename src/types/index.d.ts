/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ItemData {
  title?: string;
  subtitle?: string;
  icon?: string;
  group?: string;
  divider?: string | boolean;
  to?: string;
  subheader?: string;
  children?: ItemData[];
  href?: string;
  avatar?: string;
}

export interface BreadcrumbData {
  name: string;
  link?: string;
}

declare type Recordable<T = any> = Record<string, T>;
