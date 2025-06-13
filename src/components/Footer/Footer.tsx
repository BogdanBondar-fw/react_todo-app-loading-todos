import React from 'react';
import { Filter } from '../../App';
import classNames from 'classnames';

type Props = {
  counterValue: number;
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

export const Footer: React.FC<Props> = ({
  counterValue,
  filter,
  setFilter,
}) => (
  <footer className="todoapp__footer" data-cy="Footer">
    <span className="todo-count" data-cy="TodosCounter">
      {counterValue} {counterValue === 1 ? 'item' : 'items'} left
    </span>

    <nav className="filter" data-cy="Filter">
      <a
        href="#/"
        className={classNames('filter__link', { selected: filter === 'all' })}
        data-cy="FilterLinkAll"
        onClick={event => {
          event.preventDefault();
          setFilter('all');
        }}
      >
        All
      </a>

      <a
        href="#/active"
        className={classNames('filter__link', {
          selected: filter === 'active',
        })}
        data-cy="FilterLinkActive"
        onClick={event => {
          event.preventDefault();
          setFilter('active');
        }}
      >
        Active
      </a>

      <a
        href="#/completed"
        className={classNames('filter__link', {
          selected: filter === 'completed',
        })}
        data-cy="FilterLinkCompleted"
        onClick={event => {
          event.preventDefault();
          setFilter('completed');
        }}
      >
        Completed
      </a>
    </nav>
  </footer>
);
