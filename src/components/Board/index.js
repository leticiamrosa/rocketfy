import React, { useState } from 'react';
import produce from 'immer';
import List from '../List';
import { Container } from './styles';

import { loadLists } from '../../services/api';
import BoardContent from './context';

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(fromList, from, to) {
    console.log(fromList, from, to);

    setLists(
      produce(lists, draft => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[fromList].cards.splice(to, 0, dragged);
      })
    );
  }

  return (
    <BoardContent.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} listIndex={index} data={list} />
        ))}
      </Container>
    </BoardContent.Provider>
  );
}
