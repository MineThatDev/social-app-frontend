import { useQuasar } from "quasar"
export default function common() {
  const $q = useQuasar();
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

  const showNotification = (type, message, position) => {
    $q.notify({
      message: message,
      position: position ? position : "top",
      type: type,
      timeout: 1500,
    });
  };
  return { handleImageSrc, createUrlFromFile, showNotification };
}
