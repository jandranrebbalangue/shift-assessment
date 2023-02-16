import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm, FormProvider } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Input from "../components/Input";

interface SearchMembersProps {
  onChange: (value: string) => void;
}

const Filter: React.FC<SearchMembersProps> = ({ onChange }): JSX.Element => {
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
              <Col>
                <div className="d-flex justify-content-end">
                  <Button
                    type="button"
                    variant="light"
                    size="sm"
                    className="text-black me-2"
                  >
                    <FontAwesomeIcon
                      icon={faPlus as IconProp}
                      className="me-2"
                    />
                    invite people
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </FormProvider>
  );
};

export default Filter;
