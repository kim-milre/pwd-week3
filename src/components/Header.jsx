/* src/components/Header.jsx */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaHome, FaList, FaFire, FaPlus, FaUser, FaSignInAlt } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 700px;
  margin: 0 auto;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: background 0.3s;
  color: white;
  text-decoration: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  &.active {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const AuthNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

function Header() {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <HeaderContainer>
      <NavWrapper>
        <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          Ajou Campus Foodmap
        </h1>

        {/* 메인 메뉴 */}
        <Nav>
          <NavLink to="/" className={isActive('/')}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="/list" className={isActive('/list')}>
            <FaList /> List
          </NavLink>
          <NavLink to="/popular" className={isActive('/popular')}>
            <FaFire /> Popular Top 3
          </NavLink>
          <NavLink to="/submit" className={isActive('/submit')}>
            <FaPlus /> Submit
          </NavLink>
        </Nav>

        {/* 로그인 / 회원가입 / 프로필 */}
        <AuthNav>
          <NavLink to="/login" className={isActive('/login')}>
            <FaSignInAlt /> Login
          </NavLink>
          <NavLink to="/register" className={isActive('/register')}>
            <FaUser /> Register
          </NavLink>
          <NavLink to="/profile" className={isActive('/profile')}>
            <FaUser /> Profile
          </NavLink>
        </AuthNav>
      </NavWrapper>
    </HeaderContainer>
  );
}

export default Header;