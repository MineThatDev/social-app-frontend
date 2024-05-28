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
  return { handleImageSrc };
}
