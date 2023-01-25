import styled from "styled-components";

export const FriendsBoard = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  background-color: #dfdede;
  border-radius: 5px;
  padding: 12px;
  gap: 25px;

`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'red' : 'green';
  }};
  animation: ${props => {
    return props.isOnline ? '' : 'fadeInOut 3s infinite';
  }};
  
  @keyframes fadeInOut {
  from {
    background-color: white;
  }
  to {
    background-color: green;
  }
`;

export const Avatar = styled.img`
  width: 48px;
`;