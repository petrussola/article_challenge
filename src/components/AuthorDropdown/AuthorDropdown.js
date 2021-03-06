import React, { useState, useEffect } from "react";
import DropdownList from "react-widgets/lib/DropdownList";
import Button from "react-bootstrap/Button";

import { listAuthors } from "../../services/authors";

function AuthorDropdown({ value, onChange, onClick }) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const data = await listAuthors();
      setAuthors(data);
    };

    fetchAuthors();
  }, []);

  return (
    <div className="RegionDropdown">
      <DropdownList
        value={value}
        data={authors}
        textField={(author) =>
          author && authors.length > 0
            ? `${author.firstName} ${author.lastName}`
            : null
        }
        valueField="id"
        onChange={onChange}
        allowCreate={false}
      />
      <Button variant="outline-danger" onClick={onClick} value="remove author" className="mt-2">
        Remove Author
      </Button>
    </div>
  );
}

export default AuthorDropdown;
