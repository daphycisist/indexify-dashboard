import moment from 'moment';

export const formatCurrency = (currency: string, amount: number) => {
  const formatter = Intl.NumberFormat('en', {
    notation: 'compact',
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2, 
  });

  return formatter.format(amount);
};

export const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const formatDate = (date: Date | string | undefined) => {
  return moment(date).format('MM/DD/YYYY');
};
