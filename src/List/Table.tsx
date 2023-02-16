import RBTable from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
/* import { useNavigate } from "react-router-dom"; */
import "../scss/components/table.scss";
import { UserProps } from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import profile from "../assets/icons/svg/profile.svg";

interface FuncProps {
  list: UserProps[] | undefined;
  removeItem: (email: string) => void;
}

const Table: React.FC<FuncProps> = ({ list, removeItem }) => {
  return (
    <Card>
      <Card.Body>
        <RBTable striped hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th className="d-none d-sm-table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((item: UserProps, index: number) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={profile} className="me-2" /> {item.firstName}{" "}
                    {item.lastName}
                  </td>
                  <td>{item.email}</td>
                  <td className="text-capitalize">{item.status}</td>
                  <td className="text-center">
                    <Button
                      type="button"
                      size="sm"
                      variant="outline-secondary"
                      onClick={() => removeItem(item.firstName)}
                    >
                      <FontAwesomeIcon icon={faTrash as IconProp} />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </RBTable>
      </Card.Body>
    </Card>
  );
};

export default Table;
