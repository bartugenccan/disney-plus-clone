import React, { useEffect } from "react";

//React Redux
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

//Styled
import styled from "styled-components";

//Components
import ImgSlider from "../components/ImgSlider";
import Movies from "../components/Movies";
import Viewers from "../components/Viewers";

//Firebase
import db from "../firebase";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(tempMovies));
    });
  });

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
