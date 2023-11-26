export interface SearchParams {
  departure?: string;
  destination?: string;
  date?: Date;
  seat?: number;
  sortBy?: "date" | "fee";
}

export interface SearchFormProps {
  onSubmitSearch: (params: SearchParams) => void;
}
