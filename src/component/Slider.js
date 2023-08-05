import { Col, Container, Row, Button, Card } from "react-bootstrap";
import "./Slider.css";
const Slider = () => {
  return (
    <Container fluid>
      <Row
        className=" d-flex justify-content-between justify-content-center mt-5
"
      >
        <Col sm="3" md="3" lg="3" className=" text-center ">
          <h5>Home & Kitchen Under $30</h5>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_379x304_1X_en_US._SY304_CB609304299_.jpg"
            />
            <Card.Body>
              <Button variant="">see more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="3" md="3" lg="3" className="  text-center">
          <h5>Home refresh ideas</h5>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/SpringEvent2023/XCM_CUTTLE_1559454_3018199_379x304_1X_en_US._SY304_CB592739737_.jpg"
            />
            <Card.Body>
              <Button variant="">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="3" md="3" lg="3" className="text-center">
          <h5>Shop Laptops & Tablets</h5>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
            />
            <Card.Body>
              <Button variant="">see more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="3" md="3" lg="3" className="text-center">
          <h5>Shop activity trackers</h5>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
            />
            <Card.Body>
              <Button variant="">see more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm="3" md="3" lg="3" className="text-center">
          <h5>Create with strip lights</h5>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
            />
            <Card.Body>
              <Button variant="">see more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="3" md="3" lg="3" className="text-center">
          <h5>Shop Pet supplies</h5>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
            />
            <Card.Body>
              <Button variant="">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="3" md="3" lg="3" className="text-center">
          <h5>Deals in Tools and Home</h5>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/Holiday2022/Graphics/XCM_CUTTLE_1475305_2610205_379x304_1X_en_US._SY304_CB608600856_.jpg"
            />
            <Card.Body>
              <Button variant="">see more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="3" md="3" lg="3" className="text-center">
          <h5>Health & Personal Care</h5>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
            />
            <Card.Body>
              <Button variant="">see more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Slider;
