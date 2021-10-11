import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import Group1 from './images/Group1.png';
import Group2 from './images/Group2.png'; 
import Mask from './images/Mask.png';
import Polygon from './images/Polygon.png'
import Profile from './images/profile.png'

function App() {
  return (
    <Container fluid>
      <Row className="bodyheight">
        <Col xs={12} sm={12} lg={2} className="asidemenu">
           <Row>
              <Col className="center">
              <div className="flex justify-content">
                <img alt="" src = {Polygon} width="22" height="15"/>
                <div className="" style={{marginLeft:10}}>Walker</div>

              </div>
              </Col>
           </Row>
           <Row className="marginTop35">
              <Col className="center">
               Overview
              </Col>
           </Row>
           <Row className="marginTop35" style={{opacity:0.4}}>
              <Col className="center">
               History
              </Col>
           </Row> 
           <Row className="marginTop35" style={{opacity:0.4}}>
              <Col className="center">
               Targets
              </Col>
           </Row> 
        </Col>
        <Col xs={12} sm={12} lg={7} >
            <Row style={{paddingLeft:'1.875rem',paddingRight:'5.625rem',paddingTop:'1.25rem'}}>
                <Stack direction="horizontal" gap={3}>
                <div className="" style={{fontSize:30}}>New Routes</div>
                <div className="ms-auto" style={{fontSize:12}}>
                  <div className="fontsize12">
                  <img alt="" src = {Profile} />
                  </div>
                </div>
                </Stack>
            </Row>
           <Row style={{padding:30}}>
             <Col>
              <Row>
                <Col>
                    <img alt="" src = {Group1} width="326" height="307" />
                </Col>
            
              </Row>
              <Row style={{marginTop:60}}>
                <Col>
                    <img alt="" src = {Group2} width="326" height="203" />
                </Col>
                
              </Row>
             </Col>
             <Col>
             <div style={{ padding:40,borderRadius:30,boxShadow: "0 4px 6px 0 rgba(0,0,0,0.2)",
              transition: '0.3s',
              width:326, height:569, background: `url(${Mask})`,
            }}
            >
              <div>
            <div className="leaderboard">
              LeaderBoard
            </div>
            <div style={{marginBottom:10}}>
              <Stack direction="horizontal" className="stack" gap={3}>
                <div className="fontsize12">John Smith</div>
                <div className="ms-auto" style={{fontSize:14}}>12/02/21</div>
              </Stack>
            </div>
            <div style={{marginBottom:10}}>
              <Stack direction="horizontal" gap={3} className="stack">
                <div className="fontsize12">John Smith</div>
                <div className="ms-auto" style={{fontSize:14}}>12/02/21</div>
              </Stack>
            </div>
            <div style={{marginBottom:10}}>
              <Stack direction="horizontal" gap={3} className="stack">
                <div className="fontsize12">John Smith</div>
                <div className="ms-auto" style={{fontSize:14}}>12/02/21</div>
              </Stack>
            </div>
            </div>
            </div>
             
             </Col>
           </Row>  
           
          
        </Col>
      
        <Col xs={12} sm={12} lg={3} className="asidemenu2" style={{padding:'2.5rem'}}>
           <Row>
             <Col style={{color:'#000000',fontSize:25, marginTop:10}}>
               Recent Walks
             </Col>
           </Row>
           <Row>
             <Col style={{color:'#000000',fontSize:50, marginTop:30}}>
               1043
             </Col>
           </Row>
           <Row>
             <Col style={{color:'#000000',fontSize:18, marginBottom:10, opacity:.45}}>
                Miles in Total
             </Col>
           </Row>
           <Row style={{marginBottom:40}}>
              <Stack direction="horizontal" gap={3} className="stack">
                <div className="small_number">12.1</div>
                <div className="fontsize12">Miles</div>
                <div className="ms-auto" style={{fontSize:14}}>12/02/21</div>
              </Stack>
           </Row>
          
           <Row style={{marginBottom:40}}>
              <Stack direction="horizontal" gap={3} className="stack">
                <div className="small_number">12.1</div>
                <div className="fontsize12">Miles</div>
                <div className="ms-auto" style={{fontSize:14}}>12/02/21</div>
              </Stack>
           </Row>
           <Row style={{marginBottom:40}}>
              <Stack direction="horizontal" gap={3} className="stack">
                <div className="small_number">12.1</div>
                <div className="fontsize12">Miles</div>
                <div className="ms-auto" style={{fontSize:14}}>12/02/21</div>
              </Stack>
           </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

