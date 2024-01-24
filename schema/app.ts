enum Period {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
  Yearly = "yearly",
}

enum Learning {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
}

type Integration = {
  id: number;
  serviceId: number;
  serviceName: string;
  integrationId: number;
  integrationName: string;
  dateAdded: Date;
  dateModified: Date;
  contributor: string;
};

type service = {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
  github: string;
  isOpenSource: boolean;
  isFree: boolean;
  categories: string[];
  affiliateCode: string;
  dateAdded: Date;
  dateUpdated: Date;
  isArchived: boolean;
  isDeprecated: boolean;
  contributors: string[];
  pricing: {
    period: Period;
    currency: string;
    price: number;
    hasFreeTrial: boolean;
  };
  learningCurve: Learning;
};
