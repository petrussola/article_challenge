import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ROUTE_AUTHOR_LIST } from "../../constants";
import { getAuthor, editAuthor } from "../../services/authors";

function AuthorEdit(props) {
  const history = useHistory();
  const { authorId } = useParams();
  const [author, setAuthor] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    const fetchAuthor = async () => {
      const data = await getAuthor(authorId);
      const { firstName, lastName } = data;
      setAuthor({ firstName, lastName });
    };

    fetchAuthor();
  }, [authorId]);

  const handleSave = async () => {
    const payload = author;
    await editAuthor(authorId, payload);
    history.push(ROUTE_AUTHOR_LIST);
  };

  return (
    <div className="ArticleEdit">
      <h1>Edit Author</h1>
      <Form>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={author.firstName}
            id="firstName"
            onChange={(event) =>
              setAuthor({ ...author, [event.target.id]: event.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={author.lastName}
            id="lastName"
            onChange={(event) =>
              setAuthor({ ...author, [event.target.id]: event.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSave}>
          Save Author
        </Button>
      </Form>
    </div>
  );
}

export default AuthorEdit;
