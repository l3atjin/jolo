export interface SearchParams {
  departure?: string;
  destination?: string;
  date?: Date;
  seat?: number;
  sortBy?: "departure_day";
}

export interface SearchFormProps {
  onSubmitSearch: (params: SearchParams) => void;
}
