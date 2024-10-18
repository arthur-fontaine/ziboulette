export const i18nRouting = {
  fr: {
    "/stores": "/magasins",
    "/shop": "/boutique",
  },
};

const isKeyOf = <T extends Record<string, any>>(
  obj: T,
  key: any,
): key is keyof T => {
  return key in obj;
};

export const getRelativeLocaleUrl = (locale: string, path: string) => {
  if (isKeyOf(i18nRouting, locale) && isKeyOf(i18nRouting[locale], path)) {
    return `/${locale}${i18nRouting[locale][path]}`;
  }

  return `/${locale}${path}`;
};
