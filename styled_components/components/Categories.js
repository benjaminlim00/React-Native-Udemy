import React from 'react';
import styled from 'styled-components';

const Categories = props => <Name>{props.name}</Name>;

const Name = styled.Text`
  font-size: 32px;
  font-weight: 600;
  margin-left: 15px;
  color: #bcbece;
`;

export default Categories;
