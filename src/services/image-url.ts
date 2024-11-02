import noImage from "../assets/no_img.webp";

const getCroppedImage = (url: string) => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return newUrl;
};

export default getCroppedImage;
