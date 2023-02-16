import Card from "react-bootstrap/Card";

type ContainerProps = {
  count: string;
  status: string;
};
const Container: React.FC<ContainerProps> = ({ count, status }) => {
  return (
    <Card style={{ width: "15rem", height: "10rem" }} border="primary">
      <Card.Body className="text-center">
        <Card.Text>{count}</Card.Text>
        <Card.Text>{status}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Container;
