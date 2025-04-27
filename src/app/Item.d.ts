export type AppsFeedType = {
  feed: {
    author: {
      name: {
        label: string;
      };
      uri: {
        label: string;
      };
    };
    entry: AppEntryType[];
    updated: {
      label: string;
    };
    rights: {
      label: string;
    };
    title: {
      label: string;
    };
    icon: {
      label: string;
    };
    link: {
      attributes: {
        rel: 'self' | 'alternate';
        type?: 'text/html';
        href: string;
      };
    }[];
    id: {
      label: string;
    };
  };
};

export type AppEntryType = {
  'im:name': {
    label: string;
  };
  'im:image': [ImageSizeType, ImageSizeType, ImageSizeType]; // [base, medium, large]
  summary: {
    label: string;
  };
  'im:price': {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  'im:contentType': {
    attributes: {
      term: string;
      label: string;
    };
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: {
    'im:duration'?: {
      label: string;
    };
    attributes: {
      title?: string;
      rel: 'alternate';
      type: 'text/html';
      href: string;
      'im:assetType'?: string;
    };
  };
  id: {
    label: string;
    attributes: {
      'im:id': string;
      'im:bundleId': string;
    };
  };
  'im:artist': {
    label: string;
    attributes: {
      href: string;
    };
  };
  category: {
    attributes: {
      'im:id': string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  'im:releaseDate': {
    label: string;
    attributes: {
      label: string;
    };
  };
};

type ImageSizeType = {
  label: string;
  attributes: {
    height: string;
  };
};

export type FetchingStage<T = AppEntryType[]> = {
  isLoading: boolean | undefined;
  data?: T;
  error?: Error;
};
