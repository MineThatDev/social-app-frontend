export default function common() {
  const handleImageSrc = (imgSrc) => {
    let condition = "@/assets";
    // if local path
    if (imgSrc ? imgSrc.includes(condition) : "") {
      let newPath = imgSrc.replace(condition, "");
      return require(`@/assets${newPath}`);
      // if No path
    } else if (!imgSrc) {
      //
    }
    // For External Path
    else {
      return imgSrc;
    }
  };
  const createUrlFromFile = (file) => {
    if (file && file.name) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          resolve(reader.result);
        };

        reader.onerror = (error) => {
          reject(error);
        };

        reader.readAsDataURL(file);
      });
    }
  };
  return { handleImageSrc, createUrlFromFile };
}
