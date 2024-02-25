// Item
export type Item = {
    [key: string]: ItemValue;
  };
  
  export type ItemValue = {
    name: string;
    src: string;
    alt: string;
  };