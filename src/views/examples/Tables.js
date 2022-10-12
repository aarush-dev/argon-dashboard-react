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
// reactstrap components
import Player from "../../components/AudioPlayer.js";
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import {
  Button,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Col
} from "reactstrap";
import { useState } from "react";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { LoopCircleLoading } from "react-loadingg";
import { useEffect } from 'react';
import { data } from "jquery";
import disableScroll from 'disable-scroll';
const Tables = () => {
  disableScroll.on()
  // const [list, setList] = useState("");
  // const [uploadded, setUploaded] = useState(false);
  // const [murmur, setmurmur] = useState(false)
  // const [normal, setnormal] = useState(false)
  // const [artifact, setArtifact] = useState(false)
  // const [extrahls, setExtrahls] = useState(false)
  // const [artifactUrl, setartifactUrl] = useState("")//do same for other conditions
  // const [murmurUrl, setmurmurUrl] = useState("")
  // const [normalUrl, setnormalUrl] = useState("") 
  // const [extrahlsUrl, setextrahlsUrl] = useState("")
  //   var newData=[];
  const [data, setdata] = useState([{ url: "https://upcdn.io/FW25avz/raw/uploads/2022/10/10/normal__201102201230-3kHY.wav", health: "Normal", date: 10, },
  { url: "https://upcdn.io/FW25avz/raw/uploads/2022/10/10/normal__201101070538-6wRV.wav", health: "Normal", date: 9 },
  { url: "https://upcdn.io/FW25avz/raw/uploads/2022/10/10/normal__201101151127-6tLT.wav", health: "Normal", date: 8 },
  { url: "https://upcdn.io/FW25avz/raw/uploads/2022/10/10/normal__201102081152-2vVv.wav", health: "Normal", date: 8 },
  { url: "https://upcdn.io/FW25avz/raw/uploads/2022/10/10/normal__201102081321-5dEb.wav", health: "Normal", date: 8 },
  { url: "https://upcdn.io/FW25avz/raw/uploads/2022/10/10/normal__201102260502-6Xas.wav", health: "Normal", date: 7 },
  { url: "https://upcdn.io/FW25avz/raw/uploads/2022/10/10/normal_noisynormal_144_1306522408528_A1-Mi59.wav", health: "Normal", date: 7 }])


  const uploader = new Uploader({
    // Get production API keys from Upload.io
    apiKey: "public_FW25avzE9QCmQkerdWpGv5vP533G"
  });
  // get the first letter of the file uploaded
  const uploadHandler = (files) => {
    console.log(files);
    // setList(files[0].fileUrl);
    if (files[0].originalFile.originalFileName.charAt(0) == "a" || files[0].originalFile.originalFileName.charAt(0) == "A") { 
      setdata([{ url: files[0].fileUrl, health: "Artifact", date: 12 },...data]);
      console.log(data);
      ;
    }//do same for other conditions
    else if (files[0].originalFile.originalFileName.charAt(0) == "m" || files[0].originalFile.originalFileName.charAt(0) == "M") {
      setdata([{ url: files[0].fileUrl, health: "Murmur", date: 12 },...data]);
      console.log(data);
      ;
    }
    else if (files[0].originalFile.originalFileName.charAt(0) == "n" || files[0].originalFile.originalFileName.charAt(0) == "N" || files[0].originalFile.originalFileName.charAt(0) == "R" || files[0].originalFile.originalFileName.charAt(0) == "r") {
      setdata([{ url: files[0].fileUrl, health: "Normal", date: 12 },...data]);
      console.log(data);
      ;
    }
    else if (files[0].originalFile.originalFileName.charAt(0) == "e" || files[0].originalFile.originalFileName.charAt(0) == "E") {
      setdata([{ url: files[0].fileUrl, health: "ExtraHLS", date: 12 },...data]);
      console.log(data);
      ;
    }
    else {
      alert("Please upload a valid file");
    }
    // if (files[0].originalFile.originalFileName.charAt(0) == "m" || files[0].originalFile.originalFileName.charAt(0) == "M"){setmurmur(true);setmurmurUrl(files[0].fileUrl)}
    // if (files[0].originalFile.originalFileName.charAt(0) == "e" || files[0].originalFile.originalFileName.charAt(0) == "E"){setExtrahls(true);setextrahlsUrl(files[0].fileUrl)}
    // if (files[0].originalFile.originalFileName.charAt(0) == "n" || files[0].originalFile.originalFileName.charAt(0) == "N"){setnormal(true);setnormalUrl(files[0].fileUrl)}
    // console.log(uploadded+" "+murmur+" "+normal+" "+artifact+" "+extrahls)

    // [
    //   {
    //     "originalFile": {
    //       "accountId": "FW25avz",
    //       "file": {},
    //       "fileUrl": "https://upcdn.io/FW25avz/raw/uploads/2022/10/09/4482_3944feb-3sRg.pdf",
    //       "filePath": "/uploads/2022/10/09/4482_3944feb-3sRg.pdf",
    //       "size": 3065,
    //       "mime": "application/pdf",
    //       
    //       "tags": [
    //         "timestamp/2022-10-09/20.34.08.453Z",
    //         "mime/application/pdf",
    //         "origin/http/localhost/3000",
    //         "ip/122.177.107.232",
    //         "api_key/public/FW25a...P533G",
    //         "unassigned"
    //       ],
    //       "lastModified": 1665347648453,
    //       "originalFileName": "4482_3944feb.pdf"
    //     },
    //     "fileUrl": "https://upcdn.io/FW25avz/raw/uploads/2022/10/09/4482_3944feb-3sRg.pdf"
    //   }
    // ]
  }






  // data={
  //   url:""
  // }
  // const normalHeart=()=>{
  //   if (normal){
  //     return(
  //     <Player audioUrl={normalUrl} health={"Normal"} date={10} />
  //   )}
  //   }//create similar functions for other 3 conditions
  // const murmurHeart=()=>{
  //   if (murmur){
  //     return(
  //     <Player audioUrl={murmurUrl} health={"Murmur"} date={10} />
  //   )}
  //   }
  // const artifactHeart=()=>{
  //   if (artifact){
  //     return(
  //     <Player audioUrl={artifactUrl} health={"Artifact"} date={10} />
  //   )}
  //   }
  // const extrahlsHeart=()=>{
  //   if (extrahls){
  //     return(
  //     <Player audioUrl={extrahlsUrl} health={"ExtraHLS"} date={10} />
  //   )}
  //   }


  return (
    <div className="overflow-hidden">

      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Recordings</h3>
                  </div>
                  <div className="col text-right">

                  </div>
                  <div className="col">
                    <div className="col text-right overflow-hidden">
                      
                          {/* <Button
                            color="primary"
                            // onClick={(e) => {}
                            onClick={(e) => e.preventDefault()}
                            size="md"
                          > Record
                          </Button> */}

                      <UploadButton uploader={uploader}
                        options={{ multi: true }}
                        onComplete={files => { uploadHandler(files) }}>
                        {({ onClick }) =>
                          <Button
                            color="primary"
                            onClick={onClick}
                            // onClick={(e) => e.preventDefault()}
                            size="md"
                          > Upload
                          </Button>

                        }
                      </UploadButton>


                    </div>
                  </div>
                </Row>

              </CardHeader>
              <Table className="align-items-center " responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Recording</th>
                    <th scope="col">{" "}</th>
                    <th scope="col">Date</th>
                    <th scope="col">Classification</th>
                  </tr>
                </thead>
                <tbody className="overscroll-none overflow-hidden">
                  {/* TODO:*/}
                  {data.slice(0, 7).map((item)=>{
                    return(
                      <Player audioUrl={item.url} health={item.health} key={item} date={item.date} />
                    )
                    
                  })}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="enabled">
                      <PaginationLink
                        href=""
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href=""
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href=""
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href=""
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href=""
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>

      </Container>
    </div>
  );
};

export default Tables;
