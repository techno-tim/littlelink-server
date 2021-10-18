import React from 'react';

const Sort = ({ children }) => {
  const sorted = React.Children.toArray(children).sort((a, b) => {
    return b.props.order - a.props.order;
  });

  return sorted;
};

export default Sort;
