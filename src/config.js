const firebaseURLPrefix = 'https://firebasestorage.googleapis.com/v0/b/viecommerce.appspot.com/o/';
const firebaseAssetImagesLocation = 'assets%2Fimages%2F';
const firebaseMediaQuery = '?alt=media';

export const fireBaseMediaURL = (imageName) => {
    return (
        `${firebaseURLPrefix}${firebaseAssetImagesLocation}${imageName}${firebaseMediaQuery}`
    );
}