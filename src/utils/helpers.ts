import { AppEntryType, SimplifiedAppEntryType } from '@/app/Item';

export const simplifyAppEntry = (rawApp: AppEntryType): SimplifiedAppEntryType => ({
  id: rawApp['id']['attributes']['im:id'],
  name: rawApp['im:name'].label,
  summary: rawApp.summary.label,
  title: rawApp.title.label,
  imageSizes: rawApp['im:image'].map((rawApp) => ({
    src: rawApp.label,
    height: rawApp.attributes.height,
  })) as SimplifiedAppEntryType['imageSizes'],
  price: rawApp['im:price'].attributes,
  category: rawApp.category.attributes.label,
});

export const searchAndFilter = (appsList: SimplifiedAppEntryType[], keyword: string) =>
  appsList.filter((app) => [app.name, app.summary, app.title].some((field) => field.includes(keyword)));

const CACHE_EXPIRATION_MS = 60 * 60 * 1000;

export const safeGetCache = <T = SimplifiedAppEntryType[]>(
  key: string,
  EXPIRATION_MS: number = CACHE_EXPIRATION_MS,
): T | null => {
  if (typeof window === 'undefined' || !window.localStorage) {
    console.warn('localStorage not supported');
    return null;
  }

  try {
    const cached = localStorage.getItem(key);

    if (!cached) return null;

    const { timestamp, data } = JSON.parse(cached);
    const now = Date.now();

    if (!timestamp || now - timestamp > EXPIRATION_MS) return null;

    return data;
  } catch (error) {
    console.warn(`Failed to get cache for key "${key}":`, error);
    return null;
  }
};

export const safeSetCache = <T = SimplifiedAppEntryType[]>(key: string, cache_value: T) => {
  try {
    localStorage.setItem(
      key,
      JSON.stringify({
        timestamp: Date.now(),
        data: cache_value,
      }),
    );
  } catch (error) {
    console.warn(`Failed to set cache for key "${key}":`, error);
  }
};

export const add = (a: number, b: number) => a + b;
