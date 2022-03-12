import { debounce } from 'lodash';
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { COLORS, FONTSIZE, FONTWEIGHT } from '../../constants';
import { useGetCompaniesQuery } from '../../features/api/companyApi';
import { CompanyInterface } from '../../types';
import media from '../../utilities';
import { formatCurrency, formatDate } from '../../utilities/helpers';
import Header from '../molecules/Header';
import Pagination from '../molecules/Pagination';
import { Modal } from '../organisms/Modal';
import Table from '../organisms/Table';

const Dashboard = () => {
  const DEBOUNCE_DELAY = process.env.DEBOUNCE_DELAY as unknown as number;
  const columns = [
    {
      Header: 'Company name',
      accessor: 'company_name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Address',
      accessor: 'address',
    },
    {
      Header: 'Date created',
      accessor: 'createdAt',
      Cell: (props: { row: { original: { createdAt: string | Date } } }) => {
        return formatDate(props.row.original.createdAt);
      },
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [rowData, setRowData] = useState<CompanyInterface | null>(null);

  let {
    data: searchedCompanies,
    isFetching,
  } = useGetCompaniesQuery({
    page: currentPage,
    search: `${debouncedSearch}`,
  });

  const searchedCompaniesData = searchedCompanies?.payload;

  const handlePageIncrement = () => setCurrentPage((prev) => prev + 1);
  const handlePageDecrement = () => setCurrentPage((prev) => prev - 1);

  const handleRowClick = (data: any) => {
    setRowData(data);
    setIsOpen(true);
  };

  const debouncedSearchValue = useRef(
    debounce((searchString) => {
      setDebouncedSearch(searchString);
    }, DEBOUNCE_DELAY)
  ).current;

  useEffect(() => {
    return () => {
      debouncedSearchValue.cancel();
    };
  }, [debouncedSearchValue]);

  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const searchValue = event.target.value;
      setSearch(searchValue);
      setCurrentPage(0);
      debouncedSearchValue(searchValue);
    },
    [debouncedSearchValue]
  );

  const getRowDataNetworth = (rowData: CompanyInterface | null) => {
    const data =
      rowData &&
      formatCurrency(
        rowData?.worth_currency as string,
        rowData?.net_worth as number
      );
   
    return data;
  };

  return (
    <>
      <Modal isShown={isOpen} hide={() => setIsOpen((prev) => !prev)}>
        <ModalInfo>
          <h1 className="header">{rowData?.company_name}</h1>
          <div className="content-container">
            <div className="content-container__info-row">
              <span className="content-container__info-row-title">Email:</span>
              <span className="">{rowData?.email}</span>
            </div>
            <div className="content-container__info-row">
              <span className="content-container__info-row-title">
                Address:
              </span>
              <span className="">{rowData?.address}</span>
            </div>
            <div className="content-container__info-row">
              <span className="content-container__info-row-title">
                Date Created:
              </span>
              <span className="">{rowData?.createdAt}</span>
            </div>
            <div className="content-container__info-row">
              <span className="content-container__info-row-title">
                No. of staff:
              </span>
              <span className="">{rowData?.number_of_staff}</span>
            </div>
            <div className="content-container__info-row">
              <span className="content-container__info-row-title">
                Country:
              </span>
              <span className="">{rowData?.country}</span>
            </div>
            <div className="content-container__info-row">
              <span className="content-container__info-row-title">
                Net Worth:
              </span>
              <span className="">{getRowDataNetworth(rowData)}</span>
            </div>
          </div>
        </ModalInfo>
      </Modal>{' '}
      <DashboardWrapper>
        <Header handleSearch={handleSearch} searchValue={search} />
        <DashboardContentWrapper>
          <DashboardContent>
            <TableWrapper className="hello">
              <Table
                columns={columns}
                data={
                  (searchedCompaniesData?.companies as unknown as Record<
                    string,
                    unknown
                  >[]) ?? []
                }
                onRowClick={handleRowClick}
                isLoading={isFetching}
              />
            </TableWrapper>
            <div className="pagination_container">
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(searchedCompaniesData?.pages ?? 0)}
                handlePageDecrement={handlePageDecrement}
                handlePageIncrement={handlePageIncrement}
                className=""
              />
            </div>
          </DashboardContent>
        </DashboardContentWrapper>
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;

const ModalInfo = styled.div`
  width: 49.2rem;
  height: 33.9rem;
  background-color: ${COLORS['swan-white']};
  border-radius: 5px;

  .header {
    font-weight: ${FONTWEIGHT['font-bold']};
    font-size: ${FONTSIZE['text-lg']};
    padding: 2.4rem 0 2.2rem 2.8rem;
    border-bottom: 1px solid ${COLORS['off-white']};
  }

  .content-container {
    padding: 1.2rem 0 0 2.8rem;
    display: flex;
    flex-direction: column;
    gap: 2.1rem;

    &__info-row {
      font-size: ${FONTSIZE['text-sm']};
      display: grid;
      grid-template-columns: 92px 1fr;
      grid-gap: 32px;
      &-title {
        font-weight: ${FONTWEIGHT['font-medium']};
        line-height: 18px;
      }
    }
  }
`;

const DashboardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  min-height: 53.4rem;
`;

const DashboardContentWrapper = styled.section`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-top: 3.6rem;

  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: #fffefe;

  ${media.tablet`
  `}

  table {
    background-color: ${COLORS.white};
    width: 100%;
    min-width: 760px;
    border-spacing: 0;
    text-align: left;
    border: 1px solid ${COLORS['grey-100']};
    border-radius: 5px 5px 0px 0px;

    tr {
      &:last-child {
        td {
          border-bottom: 0;
        }
      }

      &:hover {
        cursor: pointer;
      }
    }

    th {
      font-style: normal;
      font-weight: ${FONTWEIGHT['font-medium']};
      font-size: ${FONTSIZE['text-sm']};
      line-height: 18px;
      padding: 1.8rem 0 1.6rem;
    }

    td {
      font-size: ${FONTSIZE['text-xsm']};
      font-weight: ${FONTWEIGHT['font-normal']};
      line-height: 17px;
      padding: 1.5rem 0;
    }
    th,
    td {
      border-bottom: 1px solid ${COLORS['grey-100']};
      font-style: normal;

      :first-of-type {
        padding-left: 2.4rem;
      }

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination_container {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.2rem;
    width: 100%;
  }
`;

const DashboardContent = styled.div`
  max-width: 959px;
  width: 100%;
  margin: 0 auto;
`;
