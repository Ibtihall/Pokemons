export const getIdFromUrl = (url:string):number => {
    const arr = url.split("/");
    return parseInt(arr[6]);
  }