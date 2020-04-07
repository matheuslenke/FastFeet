import styled from 'styled-components';

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 30px;
`;

export const FormRow = styled.div`
  display: flex;
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputLabel = styled.span`
  font-weight: bold;
  margin: 0 10px;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  margin: 10px;
  padding: 0 10px;
  height: 45px;
  border-radius: 4px;
`;

export const Select = styled.select`
  border: 1px solid #ddd;
  margin: 10px;
  height: 45px;
  background: #fff;
  color: #999;
`;

export const Option = styled.option``;
