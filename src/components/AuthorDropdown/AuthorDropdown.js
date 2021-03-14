import React, { useState, useEffect } from "react";
import DropdownList from "react-widgets/lib/DropdownList";

import { listAuthors } from "../../services/authors";

function AuthorDropdown({ value, onChange }) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const data = await listAuthors();
      debugger;
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
    </div>
  );
}

export default AuthorDropdown;
