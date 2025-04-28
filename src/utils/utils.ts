import { AppEntryType, SimplifiedAppEntryType } from '@/app/Item';

export const simplifyAppEntry = (rawApp: AppEntryType): SimplifiedAppEntryType => ({
  id: rawApp['id']['attributes']['im:id'],
  name: rawApp['im:name'].label,
  summary: rawApp.summary.label,
  title: rawApp.title.label,
  imageSizes: rawApp['im:image'].map((rawApp) => rawApp.label) as SimplifiedAppEntryType['imageSizes'],
  price: rawApp['im:price'].attributes,
  category: rawApp.category.attributes.label,
});

export const searchAndFilter = (appsList: SimplifiedAppEntryType[], keyword: string) =>
  appsList.filter((app) => [app.name, app.summary, app.title].some((field) => field.includes(keyword)));
