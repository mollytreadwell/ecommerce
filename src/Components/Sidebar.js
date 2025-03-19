import React, {useState} from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #f8f9fa;
  position: fixed;
  top: 0;
  right: ${props => (props.isOpen ? '0' : '-300px')};
  transition: right 0.3s ease;
  box-shadow: ${props => (props.isOpen ? '-2px 0 5px rgba(0,0,0,0.5)' : 'none')};
`;

const SidebarHeader = styled.div`
  padding: 20px;
  background-color: gray;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarContent = styled.div`
  padding: 20px;
`;

const Sidebar = ({ isOpen, toggleSidebar, cartItems }) => {


  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>
        <h3>SHOPPING BASKET</h3>
        <FaShoppingCart onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
      </SidebarHeader>
      <SidebarContent>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))
        )}
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
