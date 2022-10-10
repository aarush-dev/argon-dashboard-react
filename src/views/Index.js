/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import WaveSurfer from "wavesurfer.js";
import { FaPlay, FaUndo, FaRedo } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { useState, useEffect, useRef} from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import Player from "components/AudioPlayer.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };















  const waveformRef = useRef();
  const trackRef = useRef(); // Separated track playing from waveplayer to support bigger audio files
  const [waveSurfer, setWaveSurfer] = useState(null); // Holds the reference to created wavesurfer object

  const [playingAudio, setPlayingAudio] = useState(false);


  const playAudio = () => {
    if (!props.hideWave)
      waveSurfer.play();
    else
      trackRef.current.play();
    setPlayingAudio(true);
  };

  const pauseAudio = () => {
    if (!props.hideWave)
      waveSurfer.pause();
    else
      trackRef.current.pause();
    setPlayingAudio(false);
  };


  useEffect(() => {
    if (waveformRef.current && trackRef.current && !props.hideWave) {
      const wavesurfer = props.waveStyles
        ? WaveSurfer.create({
          ...props.waveStyles,
          container: "#waveform",
          
          responsive: true,
          backend: "MediaElement",
          

        })
        : WaveSurfer.create({
          container: "#waveform",
          responsive: true,
          backend: "MediaElement"
        });
      wavesurfer.setHeight(70);
      wavesurfer.setProgressColor("#f96332");
      wavesurfer.setCursorColor("#ffffff00")
      // Load the waveForm json if provided
      props.waveJson
        ? wavesurfer.load(trackRef.current)
        : wavesurfer.load(trackRef.current, props.waveJson);

      wavesurfer.on("ready", () => {
        setWaveSurfer(wavesurfer);
        // Returns the instance to call methods on
        if (typeof props.getWaveSurferInstance === 'function') {
          props?.getWaveSurferInstance(waveSurfer)
        }
        wavesurfer.zoom(props.zoom);
      });

      if (props?.events) {
        Object.entries(props.events).map(([key, value]) => {
          waveSurfer.on(key, value);
        })
      }
    }
  }, [
    props.audioUrl,
    props.hideWave,
    props.waveStyles,
    props.waveJson,
    props.zoom
  ]);





















  return (
    <>
      {/* <Player
        audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3"
        hideImage={true}
        waveStyles={{
          cursorWidth: 1,
          progressColor: "#ee3ec9",
          responsive: true,
          waveColor: "#121640",
          cursorColor: "transparent",
          barWidth: 0
        }}
        {/* zoom={0} */}
      {/* // waveJson
      // hideImage="true"
      // hideWave="true"
      // containerStyle={}
      /> */}
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Heart Health</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Average Heart Rate</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Recent Recordings</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="/admin/recordings"
                      // onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center " responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">{" "}</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <Player audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3"  health={"Normal"} date={10} />
                  <Player audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3" health={"Normal"} date={10} />
                  <Player audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3" health={"Normal"} date={8} />
                  <Player audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3" health={"Normal"} date={8} />
                  
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="4">
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
