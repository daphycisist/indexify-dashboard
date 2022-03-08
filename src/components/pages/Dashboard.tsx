import moment from 'moment';
import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS, FONTSIZE, FONTWEIGHT } from '../../constants';
import media from '../../utilities';
import Header from '../molecules/Header';
import Pagination from '../molecules/Pagination';
import Table from '../organisms/Table';

const Dashboard = () => {
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
    },
  ];
  const data = [
    {
      _id: '6221c01cfc13ae043f000f1e',
      company_name: 'Abata',
      email: 'ipayleykt@nih.gov',
      address: '54267 Little Fleur Avenue',
      createdAt: moment('2021-08-09T05:52:51.000Z').format('MM/DD/YYYY'),
      country: 'Indonesia',
      number_of_staff: 61300,
      net_worth: 551267685,
      worth_currency: 'IDR',
    },
    {
      _id: '6221c01dfc13ae043f000f9d',
      company_name: 'Abata',
      email: 'cberryclothoc@theguardian.com',
      address: '30749 Eastlawn Road',
      createdAt: moment('2022-01-14T06:22:26.000Z').format('MM/DD/YYYY'),
      country: 'Czech Republic',
      number_of_staff: 98852,
      net_worth: 930630675,
      worth_currency: 'CZK',
    },
    {
      _id: '6221c01cfc13ae043f000efb',
      company_name: 'Abatz',
      email: 'dcostaju@livejournal.com',
      address: '2 Morningstar Hill',
      createdAt: moment('2021-10-08T04:50:51.000Z').format('MM/DD/YYYY'),
      country: 'Thailand',
      number_of_staff: 65795,
      net_worth: 746941876,
      worth_currency: 'THB',
    },
    {
      _id: '6221c01cfc13ae043f000f16',
      company_name: 'Abatz',
      email: 'fpenticostkl@sun.com',
      address: '9121 Ridgeway Alley',
      createdAt: moment('2021-06-28T18:39:38.000Z').format('MM/DD/YYYY'),
      country: 'Nigeria',
      number_of_staff: 79397,
      net_worth: 272517120,
      worth_currency: 'NGN',
    },
    {
      _id: '6221c01afc13ae043f000cdd',
      company_name: 'Abatz',
      email: 'agaudon4s@cisco.com',
      address: '9 Meadow Ridge Trail',
      createdAt: moment('2021-11-09T20:07:34.000Z').format('MM/DD/YYYY'),
      country: 'Portugal',
      number_of_staff: 93274,
      net_worth: 111641471,
      worth_currency: 'EUR',
    },
    {
      _id: '6221c01dfc13ae043f000f65',
      company_name: 'Abatz',
      email: 'homoylanms@clickbank.net',
      address: '0 Sullivan Alley',
      createdAt: moment('2021-05-01T15:12:28.000Z').format('MM/DD/YYYY'),
      country: 'Philippines',
      number_of_staff: 35881,
      net_worth: 544159846,
      worth_currency: 'PHP',
    },
    {
      _id: '6221c01afc13ae043f000db9',
      company_name: 'Abatz',
      email: 'nlangstoneaw@cam.ac.uk',
      address: '8 Harper Terrace',
      createdAt: moment('2021-06-12T14:08:55.000Z').format('MM/DD/YYYY'),
      country: 'China',
      number_of_staff: 15028,
      net_worth: 295131018,
      worth_currency: 'CNY',
    },
    {
      _id: '6221c01afc13ae043f000d26',
      company_name: 'Agivu',
      email: 'adensell6t@virginia.edu',
      address: '76 Paget Parkway',
      createdAt: moment('2021-07-10T22:23:38.000Z').format('MM/DD/YYYY'),
      country: 'Argentina',
      number_of_staff: 248,
      net_worth: 931744574,
      worth_currency: 'ARS',
    },
    {
      _id: '6221c01afc13ae043f000d57',
      company_name: 'Aibox',
      email: 'meathorne86@wikipedia.org',
      address: '369 Marquette Circle',
      createdAt: moment('2021-09-12T22:09:10.000Z').format('MM/DD/YYYY'),
      country: 'United States',
      number_of_staff: 67678,
      net_worth: 916171831,
      worth_currency: 'USD',
    },
    {
      _id: '6221c01cfc13ae043f000ef0',
      company_name: 'Aibox',
      email: 'tstivensjj@ihg.com',
      address: '76 Superior Place',
      createdAt: moment('2021-04-21T21:26:14.000Z').format('MM/DD/YYYY'),
      country: 'Poland',
      number_of_staff: 93719,
      net_worth: 569990694,
      worth_currency: 'PLN',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageIncrement = () => setCurrentPage((prev) => prev + 1);
  const handlePageDecrement = () => setCurrentPage((prev) => prev - 1);

  const handleRowClick = (data: any) => {
    console.log(data);
  }

  return (
    <DashboardWrapper>
      <Header />
      <DashboardContentWrapper>
        <DashboardContent>
          <TableWrapper>
            <Table columns={columns} data={data} onRowClick={handleRowClick} />
          </TableWrapper>
          <div className="pagination_container">
            <Pagination
              currentPage={currentPage}
              totalPages={4}
              handlePageDecrement={handlePageDecrement}
              handlePageIncrement={handlePageIncrement}
              className=""
            />
          </div>
        </DashboardContent>
      </DashboardContentWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;

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
`;

const DashboardContentWrapper = styled.section`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-top: 3.6rem;

  padding-left: 2.5rem;
  padding-right: 2.5rem;

  ${media.tablet`
  `}

  table {
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
    //1183
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
