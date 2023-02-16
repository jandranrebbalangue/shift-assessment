import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Spinner from "../components/Spinner";
import Table from "./Table";
import Filters from "./Filter";
import Container from "../components/Container";
import { useDebounce } from "usehooks-ts";
import { URL } from "../../constants";

export type UserProps = {
  email: string;
  firstName: string;
  lastName: string;
  status: string;
};

const List: React.FC = () => {
  const queryClient = useQueryClient();
  const [visible, setVisible] = useState(false);
  const [removing, setRemoving] = useState(false);
  const [toRemoveFirstName, setToRemoveFirstName] = useState<string | null>(
    null
  );
  const [firstName, setFirstName] = useState<string>("");
  const debouncedFilter = useDebounce(firstName, 500);
  const getUsers = async (): Promise<UserProps[]> => {
    const d = await fetch(URL);
    return d.json();
  };
  const {
    data,
    isLoading,
    isFetching,
    isError: errorUsers,
  } = useQuery(["users"], getUsers);

  const searchByName = (firstName: string) => {
    const filter = data?.filter((item) => item.firstName === firstName);
    return filter;
  };
  const { data: searchUser, isError: errorSearchUser } = useQuery(
    ["users", debouncedFilter],
    () => searchByName(debouncedFilter),
    {
      enabled: Boolean(debouncedFilter),
    }
  );

  let body;

  const deleteMutation = useMutation({
    mutationFn: (_firstName: string | null) => fetch(URL),
    onMutate: (firstName: string | null) => {
      const filter = data?.filter((item) => item.firstName !== firstName);
      queryClient.setQueryData(["users"], filter);
      return { filter };
    },
  });

  const onChange = (e: string) => {
    setFirstName(e);
  };

  const removeMember = () => {
    setRemoving(true);
    deleteMutation.mutate(toRemoveFirstName);
    setRemoving(false);
    handleClose();
  };

  const handleOpen = (firstName: string) => {
    setToRemoveFirstName(firstName);
    setVisible(true);
  };

  const handleClose = () => {
    setToRemoveFirstName(null);
    setVisible(false);
  };
  if (isFetching || isLoading) {
    body = <Spinner />;
  } else if (searchUser?.length === 0) {
    body = (
      <div className="text-center">
        <h5>No users found. Try a different search or invite a Team Member</h5>
      </div>
    );
  } else if (errorUsers || errorSearchUser) {
    body = (
      <div className="text-center">
        <h5>Something went wrong</h5>
      </div>
    );
  } else if (data?.length === 0) {
    <div>
      <h5>No data yet</h5>
    </div>;
  } else if (firstName) {
    const searchUsers = data?.filter((item) => item.firstName === firstName);
    body = (
      <React.Fragment>
        <Modal show={visible} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title as="p" className="fw-bold">
              Delete
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>Are you sure you want to delete this person</span>
            <br />
            <span>
              This action cannot be undone and all data associated with this
              person will be permanently removed
            </span>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-dark"
              onClick={handleClose}
              disabled={removing}
            >
              NO
            </Button>
            <Button
              variant="danger"
              onClick={removeMember}
              className="text-white"
              disabled={removing}
            >
              YES
            </Button>
          </Modal.Footer>
        </Modal>
        <Table list={searchUsers} removeItem={handleOpen} />
      </React.Fragment>
    );
  } else {
    body = (
      <React.Fragment>
        <Modal show={visible} onHide={handleClose} centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <span className="fw-bold">
              Are you sure you want to delete this person
            </span>
            <br />
            <span>
              This action cannot be undone and all data associated with this
              person will be permanently removed
            </span>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-dark"
              onClick={handleClose}
              disabled={removing}
            >
              NO
            </Button>
            <Button
              variant="danger"
              onClick={removeMember}
              className="text-white"
              disabled={removing}
            >
              YES
            </Button>
          </Modal.Footer>
        </Modal>
        <Table list={data} removeItem={handleOpen} />
      </React.Fragment>
    );
  }

  return (
    <>
      <div className="list w-100">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex justify-content-between">
            <div>
              <Container count="7" status="Active" />
            </div>
            <div className="">
              <Container count="20" status="Active" margin="15px" />
            </div>
          </div>
        </div>
        <Filters onChange={onChange} />
        {body}
      </div>
    </>
  );
};

export default List;
