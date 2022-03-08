import { Row } from "react-table";

export interface InputInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface CardInterface
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export interface TableInterface
  extends React.TableHTMLAttributes<HTMLTableElement> {
  columns: {
    Header: string;
    accessor: string;
  }[];
  data: Record<string, unknown>[];
}

export interface CompanyInterface {
  _id: string;
  company_name: string;
  email: string;
  address: string;
  createdAt: string;
  country: string;
  number_of_staff: number;
  net_worth: number;
  worth_currency: string;
}

export interface PaginationInterface
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  handlePageDecrement: () => void;
  handlePageIncrement: () => void;
}

export interface TableInterface extends React.TableHTMLAttributes<HTMLTableElement> {
  data: Record<string, unknown>[];
  columns: { Header: string; accessor: string }[];
  // onRowClick?: (id: number, data: any) => void;
  onRowClick?: (row:Record<string, unknown>) => void;
}
