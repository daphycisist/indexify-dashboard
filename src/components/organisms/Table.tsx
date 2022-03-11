import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useTable } from 'react-table';
import { TableInterface } from '../../types';
import TableEmptyState from '../molecules/TableEmptyState';
const Table: FC<TableInterface> = ({
  data,
  columns,
  onRowClick,
  isLoading,
}) => {
  const TableData = React.useMemo(() => data, [data]);

  const TableColumns = React.useMemo(() => columns, [columns]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: TableColumns, data: TableData });

  console.log(isLoading);

  return !rows.length && !!isLoading ? (
    <>
      {
        <table>
          <thead>
            <tr
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr 1fr 1fr',
              }}
            >
              {headerGroups.map((column) => {
                return column.headers.map((header) => {
                  return <th key={Math.random()}>{header.Header}</th>;
                });
              })}
            </tr>
          </thead>
        </table>
      }
      <div
        style={{
          width: '100%',
          height: '48rem',
          margin: '0 auto',
          display: 'grid',
          placeContent: 'center',
        }}
      >
        <TableEmptyState />
      </div>
    </>
  ) : (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {!rows.length ? (
          <tr
            style={{
              width: '100%',
              height: '48rem',
              margin: '0 auto',
            }}
          >
            <td>
              <TableEmptyState />
            </td>
          </tr>
        ) : isLoading ? (
          <tr>
            <td>
              <Skeleton height={20} />
            </td>
            <td>
              <Skeleton height={20} />
            </td>
            <td>
              <Skeleton height={20} />
            </td>
            <td>
              <Skeleton height={20} />
            </td>
          </tr>
        ) : (
          rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                onClick={() => onRowClick && onRowClick(row.original)}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};

export default Table;
