import React from 'react';

export const Title = ({name}) => {
  return (
      <label form={`title`}
             className={`title`}>{name}</label>
  );
}
