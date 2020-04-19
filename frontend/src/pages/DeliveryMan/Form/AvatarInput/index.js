import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { MdInsertPhoto } from 'react-icons/md';
import { toast } from 'react-toastify';

import { Container, DefaultAvatar } from './styles';
import api from '~/services/api';

export default function AvatarInput({ name, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [fileId, setFileId] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'dataset.fileid',
      clearValue() {
        ref.value = '';
        setPreview(null);
      },
    });
  }, [fieldName, registerField]);

  async function handleChange(e) {
    try {
      const data = new FormData();

      data.append('file', e.target.files[0]);

      const response = await api.post('files', data);
      const { id, url } = response.data;

      setFileId(id);
      setPreview(url);
    } catch (err) {
      toast.error(error.response.data.error);
    }
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? (
          <img src={preview} alt="User Avatar" />
        ) : (
          <DefaultAvatar>
            <MdInsertPhoto size={45} color="#ddd" />
            <span>Adicionar Foto</span>
          </DefaultAvatar>
        )}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-fileid={fileId}
          onChange={handleChange}
          ref={ref}
          {...rest}
        />
      </label>
    </Container>
  );
}
