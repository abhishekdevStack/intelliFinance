import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const SLCircularProgress = styled(CircularProgress)`
  margin: 0 7.5px;
  height: 1.65rem !important;
  width: 1.65rem !important;
  color: #ee6e73;
`;

const SLOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  z-index: 2000;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(10, 10, 10, 0.9);
  overflow-x: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const SlLoaderText = styled.div`
  margin: 0 7.5px;
  color: #fff;
  font-size: 1.65rem;
  color: #fff;
  font-weight: 300;
`;
class SLProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: props.showLoader
    };
  }

  UNSAFE_componentWillReceiveProps(props) {
    const showLoader = props.showLoader;
    if (showLoader !== this.state.showLoader) {
      this.setState({
        showLoader
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.showLoader && (
          <SLOverlay>
            <SLCircularProgress />
            <SlLoaderText>
              Please wait a moment while we load the information ...
            </SlLoaderText>
          </SLOverlay>
        )}
      </div>
    );
  }
}

export default SLProgressBar;
