import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider(props) {
  const [articles, setArticles] = useState();
  const [tags, setTags] = useState();

  return (
    <AppContext.Provider value={{ tags, setTags, articles, setArticles }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
