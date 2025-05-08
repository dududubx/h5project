export const useLongPress = (callback, delay = 500) => {
    let timer = null;
  
    const start = () => {
      timer = setTimeout(() => {
        callback();
      }, delay);
    };
  
    const cancel = () => {
      clearTimeout(timer);
    };
  
    return {
      start,
      cancel,
    };
  };