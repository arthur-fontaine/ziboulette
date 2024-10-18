import { defineCollection, z } from "astro:content";

const indexCollection = defineCollection({
  type: "content",
  schema: z.object({
    titleText: z.string(),
    descriptionText: z.string(),
    betaText: z.string(),
    introHtml: z.string(),
    buttons: z.object({
      buyButtonText: z.string(),
      pressButtonText: z.string(),
      buyOnlineButtonText: z.string(),
      storesButtonText: z.string(),
    }),
    discover: z.object({
      titleText: z.string(),
      subtitleText: z.string(),
      contentHtml: z.string(),
    }),
    whyChoose: z.object({
      titleText: z.string(),
      features: z.array(
        z.object({
          titleText: z.string(),
          descriptionText: z.string(),
        }),
      ),
    }),
    innovation: z.object({
      titleText: z.string(),
      content1Html: z.string(),
      content2Html: z.string(),
    }),
    whereToBuy: z.object({
      titleText: z.string(),
      contentHtml: z.string(),
    }),
    forProfessionals: z.object({
      titleText: z.string(),
      contentHtml: z.string(),
    }),
    contact: z.object({
      titleText: z.string(),
      descriptionText: z.string(),
      fields: z.object({
        nameText: z.string(),
        emailText: z.string(),
        subjectText: z.string(),
        messageText: z.string(),
        submitText: z.string(),
      }),
      subjects: z.object({
        infoText: z.string(),
        priceText: z.string(),
        recipeText: z.string(),
        pressText: z.string(),
        otherText: z.string(),
      }),
    }),
    faq: z.object({
      titleText: z.string(),
      questions: z.array(
        z.object({
          questionText: z.string(),
          answerText: z.string(),
        }),
      ),
    }),
  }),
});

const sharedCollection = defineCollection({
  type: "content",
  schema: z.object({
    allRightsReservedText: z.string(),
    nav: z.object({
      homeText: z.string(),
      shopText: z.string(),
      storesText: z.string(),
    }),
  }),
});

const shopCollection = defineCollection({
  type: "content",
  schema: z.object({
    titleText: z.string(),
    descriptionText: z.string(),
    priceText: z.string(),
    products: z.object({
      titleText: z.string(),
      products: z.array(
        z.object({
          nameText: z.string(),
          descriptionText: z.string(),
          priceText: z.string(),
          buttonText: z.string(),
          itemConditionEnumLink: z.string().url(),
          availabilityEnumLink: z.string().url(),
          image: z.object({
            url: z.string(),
          }),
          skuText: z.string(),
          link: z.string(),
        }),
      ),
    }),
    reviews: z.object({
      titleText: z.string(),
      reviews: z.array(
        z.object({
          rating: z.number(),
          dateText: z.string(),
          authorText: z.string(),
          contentText: z.string(),
        }),
      ),
    }),
  }),
});

const storesCollection = defineCollection({
  type: "content",
  schema: z.object({
    titleText: z.string(),
    descriptionText: z.string(),
    goToButtonText: z.string(),
  }),
});

export const collections = {
  index: indexCollection,
  shared: sharedCollection,
  shop: shopCollection,
  stores: storesCollection,
};
