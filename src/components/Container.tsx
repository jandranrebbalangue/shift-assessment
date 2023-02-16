import Card from "react-bootstrap/Card";

type ContainerProps = {
  count: string;
  status: string;
  margin?: string;
};
const Container: React.FC<ContainerProps> = ({ count, status, margin }) => {
  return (
    <Card
      style={{ width: "10rem", height: "6rem", marginLeft: margin }}
      border="primary"
    >
      <Card.Body className="text-center">
        <Card.Text className="fw-bold">{count}</Card.Text>
        <Card.Text className="fw-bold">{status}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Container;
