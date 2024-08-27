// A workaround while deprecating legacy format. This function will be adjusted when NIP-32 fully implemented properly.
export function transformNip32ContentSafetyToLegacyFormat(classificationData: any[][]) {
  let finalClassificationData = [];
  let currentUrl = "";
  let classificationDataTemp: any = {};
  for (const classification of classificationData) {
    if (classification[4] !== currentUrl) {
      currentUrl = classification[4];
      if (!classificationDataTemp.hasOwnProperty(currentUrl)) classificationDataTemp[currentUrl] = {};
    }
    classificationDataTemp[currentUrl][classification[1]] = classification[3];
  }

  for (const key of Object.keys(classificationDataTemp)) {
    finalClassificationData.push({ data: classificationDataTemp[key], url: key });
  }

  return finalClassificationData;
}

// A workaround while deprecating legacy format. This function will be adjusted when NIP-32 fully implemented properly.
export function transformNip32LanguageToLegacyFormat(classificationData: any[][]) {
  let finalClassificationData = [];
  for (const classification of classificationData) {
    finalClassificationData.push({ confidence: classification[3], language: classification[1] })
  }
  return finalClassificationData;
}

// A workaround while deprecating legacy format. This function will be adjusted when NIP-32 fully implemented properly.
export function transformNip32ToxicityToLegacyFormat(classificationData: any[][]) {
  let finalClassificationData: any = {};
  for (const classification of classificationData) {
    finalClassificationData[classification[1]] = classification[3];
  }
  return finalClassificationData;
}