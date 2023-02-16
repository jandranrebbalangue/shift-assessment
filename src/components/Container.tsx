import Card from "react-bootstrap/Card";

type ContainerProps = {
  count: string;
  status: string;
  margin?: string;
};
const Container: React.FC<ContainerProps> = ({ count, status, margin }) => {
  return (
    <Card
      style={{ width: "15rem", height: "10rem", marginLeft: margin }}
      border="primary"
    >
      <Card.Body className="text-center">
        <Card.Text>{count}</Card.Text>
        <Card.Text>{status}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Container;
