function workItemsData(t) {
  // works dizisini doğrudan al
  const worksArray = t("works", { returnObjects: true });

  // Eğer i18n henüz yüklenmediyse, fallback olarak boş array
  if (!worksArray || !Array.isArray(worksArray)) return [];

  return worksArray.map((_, i) => ({
    id: `item${i + 1}`,
    title: t(`works.${i}.title`),
    bigtitle: t(`works.${i}.bigtitle`),
    image: t(`works.${i}.image`),
    showcase: {
      keyfeatures: {
        title: t(`works.${i}.showcase.keyfeatures.title`),
        content: t(`works.${i}.showcase.keyfeatures.content`, {
          returnObjects: true,
        }),
      },
      technologiesused: {
        title: t(`works.${i}.showcase.technologiesused.title`),
        content: t(`works.${i}.showcase.technologiesused.content`, {
          returnObjects: true,
        }),
      },
      overview: {
        title: t(`works.${i}.showcase.overview.title`),
        timeline: t(`works.${i}.showcase.overview.timeline`),
        company: t(`works.${i}.showcase.overview.company`),
        description: t(`works.${i}.showcase.overview.description`),
        highlights: t(`works.${i}.showcase.overview.highlights`, {
          returnObjects: true,
        }),
      },
    },
  }));
}

export default workItemsData;
