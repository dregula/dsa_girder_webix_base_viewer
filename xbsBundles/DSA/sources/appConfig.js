/*
    Source Api URL, Initial collection/folder ID, Initial folder/collection type
*/
export const appSettings = {
	serverApiURL: "http://candygram.neurology.emory.edu:8080/api/v1",
	initialParentId: "5d14f9b0bd4404c6b1d53ec5",
	initialParentType: "collection"
};
/*
    if variable skipCrashedImages IS FALSE all crashed images are changed for default image (crashedImageURL)
    if variable skipCrashedImages IS TRUE all crashed images are skip, and remove from dataview view
*/
export const skipCrashedImages = false;
export const crashedImageURL = "../../img/no_image.png";
export const preloaderImageURL = "../../img/preloader_image.gif";

/*  CONFIGURATION DATA  */

//LOGO IMAGES
export const firstLogoImg = "../../img/CDSA_Slide_50.png";
export const secondLogoImg = "../../img/Winship_NCI_shortTag_hz_280_50height.jpg";

// ENABLE/DISABLE MODULES (TABS)
export let tabsState = {
	metadata: "enable",
	applyFilter: "enable",
	pathologyReport: "enable",
	aperioAnnotations: "disable"
};

export const maxComboboxQuantity = 3;

export const mainViewPath = "mainMockup";