// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Tag from './Tag';
import PersonItem from './PersonItem';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [peopleList, setPeopleList] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Alice Smith', email: 'alice@example.com' },
    { id: 4, name: 'Bob Johnson', email: 'bob@example.com' },
    // Add more people as needed
  ]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTagSelection = (person) => {
    setSelectedTags([...selectedTags, person.name]);
    setPeopleList(peopleList.filter((p) => p.id !== person.id));
    setInputValue('');
  };

  const handleTagRemoval = (tag) => {
    setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    setPeopleList([...peopleList, { name: tag, email: `${tag.toLowerCase()}@example.com` }]);
  };

  const handlePersonClick = (person) => {
    console.log(person)
    handleTagSelection(person);
  };

  useEffect(() => {
    // Your API call or other logic to update the peopleList
    // For simplicity, I'm using a static list
  }, [peopleList]);

  return (
    <div className="App">
      <div className="tag-container">
        {selectedTags.map((tag, index) => (
          <Tag key={index} person={tag} onRemove={handleTagRemoval} />
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a name"
        />
      </div>
      {inputValue && (
        <div className="people-list">
          {peopleList
            .filter((person) => person.name.toLowerCase().includes(inputValue.toLowerCase()))
            .map((person) => (
              <PersonItem
                key={person.id}
                person={person.name}
                email={person.email}
                onClick={handlePersonClick}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default App;
