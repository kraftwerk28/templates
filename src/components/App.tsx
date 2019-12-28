import React, { FC, useState, useCallback } from 'react';

import 'scss/index.scss';

const App: FC<{}> = () => {
  const [name, setName] = useState('Hello, world!');
  const click = useCallback(
    () =>
      setName(n =>
        n
          .split('')
          .reverse()
          .join('')
      ),
    []
  );
  return <code className='class1' onClick={click}>{name}</code>;
};

export default App;
