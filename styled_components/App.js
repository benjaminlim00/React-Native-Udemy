import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import profilePng from './assets/profile.png';
import Categories from './components/Categories';
import Card from './components/Card';

const items = [
  { text: 'Fruits' },
  { text: 'Bread' },
  { text: 'Drinks' },
  { text: 'Veggies' },
  { text: 'Meat' },
  { text: 'Paper Goods' }
];

const App = () => (
  <Container>
    <ScrollView>
      <Titlebar>
        <Avatar source={profilePng} />
        <Title>Welcome back,</Title>
        <Name>Ben</Name>
        <Icon
          name="md-cart"
          size={32}
          color="black"
          style={{ position: 'absolute', right: 20, top: 5 }}
        />
      </Titlebar>
      <ScrollView
        horizontal
        style={{
          padding: 20,
          paddingLeft: 12,
          paddingTop: 30,
          flexDirection: 'row'
        }}
        showsHorizontalScrollIndicator={false}
      >
        {items.map((category, index) => (
          <Categories name={category.text} key={index} />
        ))}
      </ScrollView>

      <Subtitle>Items</Subtitle>
      <ItemsLayout>
        <ColumnOne>
          <Card />
        </ColumnOne>
        <ColumnTwo>
          <Card />
        </ColumnTwo>
      </ItemsLayout>
    </ScrollView>
  </Container>
);

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Titlebar = styled.View`
  width: 100%;
  margin-top: 10px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: white;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #b8bece;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: 500;
  margin-top: 10px;
  margin-left: 25px;
  text-transform: uppercase;
`;

const ItemsLayout = styled.View`
  flex-direction: row;
  flex: 1;
`;

const ColumnOne = styled.View``;

const ColumnTwo = styled.View``;

export default App;
