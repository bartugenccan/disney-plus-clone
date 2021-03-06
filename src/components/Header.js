import React, { useEffect } from "react";

//Styled Components
import styled from "styled-components";

//Router
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

//Redux
import { useSelector } from "react-redux";
import { selectPhoto, setSignOut } from "../features/user/userSlice";
import { setUserLogin } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

//firebase
import { auth, provider } from "../firebase";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  });

  const photo = useSelector(selectPhoto);
  console.log(photo);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          photo: user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Link to="/">
        <Logo src="/images/logo.svg" alt="Disney + Logo" />
      </Link>
      {!photo ? (
        <LoginContainer>
          <LoginButton onClick={signIn}>Login</LoginButton>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a href="/">
              <img src="/images/home-icon.svg" alt="home-icon" />
              <span>HOME</span>
            </a>

            <a href="#/">
              <img src="/images/search-icon.svg" alt="home-icon" />
              <span>SEARCH</span>
            </a>
            <a href="#/">
              <img src="/images/watchlist-icon.svg" alt="home-icon" />
              <span>WATCHLIST</span>
            </a>
            <a href="#/">
              <img src="/images/original-icon.svg" alt="home-icon" />
              <span>ORIGINALS</span>
            </a>
            <a href="#/">
              <img src="/images/movie-icon.svg" alt="home-icon" />
              <span>MOVIES</span>
            </a>
            <a href="#/">
              <img src="/images/series-icon.svg" alt="home-icon" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg onClick={signOut} src={!photo ? null : photo} alt=".." />
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 70px;
  background: #090b13;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: white;

    img {
      height: 20px;
    }

    span {
      font-size: 14px;
      letter-spacing: 1.4px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const LoginButton = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
