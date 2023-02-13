export interface FetchingObj {
   loading: boolean;
   error: string;
   data?: {[key: string] : string}[];
}

export default FetchingObj