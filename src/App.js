import React, { useState, useEffect } from 'react';
import './App.css';
import Tag from './Tag';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [peopleList, setPeopleList] = useState([
    'John Doe',
    'Jane Doe',
    'Alice Smith',
    'Bob Johnson',
  ]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTagSelection = (tag) => {
    setSelectedTags([...selectedTags, tag]);
    setPeopleList(peopleList.filter((person) => person !== tag));
    setInputValue('');
  };

  const handleTagRemoval = (tag) => {
    setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    setPeopleList([...peopleList, tag]);
  };

  const handleBackspace = (e) => {
    if (e.key === 'Backspace' && inputValue === '') {
      const lastTag = selectedTags[selectedTags.length - 1];
      if (lastTag) {
        handleTagRemoval(lastTag);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleBackspace);
    return () => {
      window.removeEventListener('keydown', handleBackspace);
    };
  }, [selectedTags]);

  return (
    <div className="App">
      <div className="tag-container">
        {selectedTags.map((tag, index) => (
          <Tag key={index} person={tag} onRemove={() => handleTagRemoval(tag)} />
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
            .filter((person) => person.toLowerCase().includes(inputValue.toLowerCase()))
            .map((person, index) => (
              <div key={index} onClick={() => handleTagSelection(person)}>
                {person}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default App;
