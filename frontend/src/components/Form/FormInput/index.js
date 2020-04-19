import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { FormInput, ErrorSpan } from './styles';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <FormInput ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <ErrorSpan className="error">{error}</ErrorSpan>}
    </>
  );
}
