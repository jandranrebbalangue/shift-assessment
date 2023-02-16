import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../components/Input";

interface SearchMembersProps {
  onChange: (value: string) => void;
}

const Filters: React.FC<SearchMembersProps> = ({ onChange }): JSX.Element => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Card className="mb-4">
        <Card.Body>
          <Form>
            <Row className="mb-2">
              <Col>
                <Input
                  id="firstName"
                  placeholder="Search members"
                  callback={onChange}
                />
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </FormProvider>
  );
};

export default Filters;
