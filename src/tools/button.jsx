import React from 'react';

export const Button = ({name, ...props}) => {
  return (
    <button className={`button`} type={`submit`} {...props}>
        {name}
    </button>
  );
}
