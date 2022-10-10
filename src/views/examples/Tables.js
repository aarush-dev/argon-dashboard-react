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
import { useEffect} from 'react';

const Tables = () => {

  const [list, setList] = useState("");
  const [uploadded, setUploaded] = useState(false);
  const [murmur, setmurmur] = useState(false)
  const [normal, setnormal] = useState(false)
  const [artifact, setArtifact] = useState(false)
  const [extrahls, setExtrahls] = useState(false)
  const [artifactUrl, setartifactUrl] = useState("")//do same for other conditions
  const [murmurUrl, setmurmurUrl] = useState("")
  const [normalUrl, setnormalUrl] = useState("")
  const [extrahlsUrl, setextrahlsUrl] = useState("")


  const uploader = new Uploader({
    // Get production API keys from Upload.io
    apiKey: "public_FW25avzE9QCmQkerdWpGv5vP533G"
  });
// get the first letter of the file uploaded
const uploadHandler=(files)=>{
  console.log(files);
  setList(files[0].fileUrl);
  if (files[0].originalFile.originalFileName.charAt(0) == "a" || files[0].originalFile.originalFileName.charAt(0) == "A") { setArtifact(true); setartifactUrl(files[0].fileUrl)}//do same for other conditions
  if (files[0].originalFile.originalFileName.charAt(0) == "m" || files[0].originalFile.originalFileName.charAt(0) == "M"){setmurmur(true);setmurmurUrl(files[0].fileUrl)}
  if (files[0].originalFile.originalFileName.charAt(0) == "e" || files[0].originalFile.originalFileName.charAt(0) == "E"){setExtrahls(true);setextrahlsUrl(files[0].fileUrl)}
  if (files[0].originalFile.originalFileName.charAt(0) == "n" || files[0].originalFile.originalFileName.charAt(0) == "N"){setnormal(true);setnormalUrl(files[0].fileUrl)}
console.log(uploadded+" "+murmur+" "+normal+" "+artifact+" "+extrahls)

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
const normalHeart=()=>{
  if (normal){
    return(
    <Player audioUrl={normalUrl} health={"Normal"} date={10} />
  )}
  }//create similar functions for other 3 conditions
const murmurHeart=()=>{
  if (murmur){
    return(
    <Player audioUrl={murmurUrl} health={"Murmur"} date={10} />
  )}
  }
const artifactHeart=()=>{
  if (artifact){
    return(
    <Player audioUrl={artifactUrl} health={"Artifact"} date={10} />
  )}
  }
const extrahlsHeart=()=>{
  if (extrahls){
    return(
    <Player audioUrl={extrahlsUrl} health={"ExtraHLS"} date={10} />
  )}
  }

  return (
    <>
      
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
                  <div className="col">
                    <div className="col text-right">
                      <UploadButton uploader={uploader}
                        options={{ multi: false}}
                        onComplete={files =>{uploadHandler(files)}}>
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
                    <th scope="col">Page name</th>
                    <th scope="col">{" "}</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {murmur ? <Player audioUrl={list} health={"Murmur"} date={10} /> : null}
                  {/* {normal ? <Player audioUrl={list} health={"Normal"} date={10} /> :null} */}
                  {/* {extrahls ? <Player audioUrl={list} health={"Extrahls"} date={10} /> : null}
                  {artifact ? <Player audioUrl={list} health={"Artifact"} date={10} /> : null} */} {murmurHeart()}
                  {extrahlsHeart()}
                  {artifactHeart()}
                  {normalHeart()}
                  
                  <Player audioUrl="https://upcdn.io/FW25avz/raw/uploads/2022/10/09/extrahls__201103182227-5GGD.wav" health={"Normal"} date={10} />
                  <Player audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3" health={"Normal"} date={9} />
                  <Player audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3" health={"Normal"} date={8} />
                  <Player audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3" health={"Normal"} date={8} />
                  <Player audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3" health={"Normal"} date={8}/>
                  <Player audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3" health={"Normal"} date={7} />
                  <Player audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3" health={"Normal"} date={7} />

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
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
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
    </>
  );
};

export default Tables;
