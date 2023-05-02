export interface FetchingObj {
  isLoading: boolean;
  error: string;
  data?: { [key: string]: string }[];
  isErrror: boolean;
}

export default FetchingObj;
